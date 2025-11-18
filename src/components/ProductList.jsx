import { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";

const typeLabels = {
  "bike-battery": "Bike Battery",
  "car-battery": "Car Battery",
  inverter: "Inverter",
  "inverter-battery": "Inverter Battery",
};

export default function ProductList(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [brand, setBrand] = useState("All");
  const [type, setType] = useState("All");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      if (brand !== "All") params.set("brand", brand);
      if (type !== "All") params.set("type", type);
      const res = await fetch(`${base}/api/products?${params.toString()}`);
      const data = await res.json();
      setItems(data.items || []);
      setLoading(false);
    };
    load();
  }, [q, brand, type]);

  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-5 h-5 text-white/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              className="w-full bg-white/10 text-white placeholder-white/60 pl-10 pr-3 py-2 rounded-lg outline-none"
              placeholder="Search battery or inverter..."
              value={q}
              onChange={(e)=>setQ(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 text-white/70"><Filter className="w-4 h-4"/>Filters:</div>
          <select className="bg-white/10 text-white px-3 py-2 rounded-lg" value={brand} onChange={e=>setBrand(e.target.value)}>
            {['All','Amaron','Exide','Luminous'].map(b=> <option key={b}>{b}</option>)}
          </select>
          <select className="bg-white/10 text-white px-3 py-2 rounded-lg" value={type} onChange={e=>setType(e.target.value)}>
            {['All','bike-battery','car-battery','inverter','inverter-battery'].map(t=> <option key={t}>{t}</option>)}
          </select>
        </div>
        {loading ? (
          <div className="text-white/70">Loading...</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, idx) => (
              <div key={idx} className="bg-white/5 ring-1 ring-white/10 rounded-xl p-5 text-white">
                <div className="text-xs text-white/60 mb-2">{p.brand} • {typeLabels[p.type] || p.type}</div>
                <h3 className="font-semibold text-lg">{p.name}</h3>
                {p.capacity_ah && <div className="text-white/80 mt-1">Capacity: {p.capacity_ah} Ah</div>}
                {p.warranty_months && <div className="text-white/80">Warranty: {p.warranty_months} months</div>}
                {p.price && <div className="text-emerald-300 font-semibold mt-2">₹ {p.price}</div>}
                {p.description && <p className="text-white/70 mt-2 text-sm">{p.description}</p>}
                <div className="mt-4 flex items-center gap-3">
                  <a href={`https://wa.me/919586215548?text=Hi%20Chirag%20Battery,%20I'm%20interested%20in%20${encodeURIComponent(p.name)}%20(${encodeURIComponent(typeLabels[p.type] || p.type)}).`} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm">WhatsApp</a>
                  <a href={`tel:+919586215548`} className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm">Call</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
