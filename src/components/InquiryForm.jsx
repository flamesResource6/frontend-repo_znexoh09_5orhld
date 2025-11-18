import { useState } from "react";
import { Send } from "lucide-react";

export default function InquiryForm(){
  const [form, setForm] = useState({ name: "", phone: "", product_type: "car-battery", brand: "Amaron", message: "" });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try{
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, preferred_contact: 'whatsapp', city: 'Veraval, Gir Somnath' })
      });
      const data = await res.json();
      if(res.ok){
        setStatus("success");
        setForm({ name: "", phone: "", product_type: "car-battery", brand: "Amaron", message: "" });
      }else{
        setStatus(data.detail || "error");
      }
    }catch(err){
      setStatus("error");
    }
  }

  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6">
          <h3 className="text-white text-2xl font-semibold mb-4">Request a Callback</h3>
          <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 text-white">
            <input className="bg-white/10 rounded-lg px-3 py-2 outline-none" placeholder="Your Name" value={form.name} onChange={e=>setForm({ ...form, name: e.target.value })} required />
            <input className="bg-white/10 rounded-lg px-3 py-2 outline-none" placeholder="Phone / WhatsApp" value={form.phone} onChange={e=>setForm({ ...form, phone: e.target.value })} required />
            <select className="bg-white/10 rounded-lg px-3 py-2 outline-none" value={form.product_type} onChange={e=>setForm({ ...form, product_type: e.target.value })}>
              {['bike-battery','car-battery','inverter','inverter-battery'].map(t=> <option key={t}>{t}</option>)}
            </select>
            <select className="bg-white/10 rounded-lg px-3 py-2 outline-none" value={form.brand} onChange={e=>setForm({ ...form, brand: e.target.value })}>
              {['Amaron','Exide','Luminous'].map(b=> <option key={b}>{b}</option>)}
            </select>
            <textarea className="bg-white/10 rounded-lg px-3 py-2 outline-none md:col-span-2" rows={3} placeholder="Your message (optional)" value={form.message} onChange={e=>setForm({ ...form, message: e.target.value })} />
            <div className="md:col-span-2 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white" disabled={status==='loading'}>
                <Send className="w-5 h-5"/>
                {status==='loading' ? 'Sending...' : 'Send Request'}
              </button>
              {status==='success' && <span className="text-emerald-300">Thanks! We will contact you shortly.</span>}
              {status && status!=='success' && status!=='loading' && <span className="text-red-300">{String(status)}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
