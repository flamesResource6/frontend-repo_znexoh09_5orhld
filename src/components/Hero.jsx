import { Phone, MessageCircle, BatteryCharging, Car, Bike, Home } from "lucide-react";

const CTAButton = ({ href, icon: Icon, children, primary = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${
      primary
        ? "bg-emerald-500 hover:bg-emerald-600 text-white"
        : "bg-white/10 hover:bg-white/20 text-white"
    } inline-flex items-center gap-2 px-5 py-3 rounded-xl transition-colors`}
  >
    <Icon className="w-5 h-5" />
    {children}
  </a>
);

export default function Hero() {
  const phone = "9586215548";
  const whatsapp = `https://wa.me/91${phone}`;
  const call = `tel:+91${phone}`;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.15),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.15),transparent_30%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 ring-1 ring-white/20 mb-4">
              <BatteryCharging className="w-4 h-4" />
              Chirag Battery • Veraval, Gir Somnath
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Bike & Car Batteries, Inverters and Inverter Batteries
            </h1>
            <p className="text-blue-100/90 mt-4 text-lg">
              Authorized dealer for Amaron, Exide and Luminous. Fast delivery, free installation and genuine warranty support.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <CTAButton href={call} icon={Phone} primary>
                Call {phone}
              </CTAButton>
              <CTAButton href={whatsapp} icon={MessageCircle}>
                WhatsApp Us
              </CTAButton>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-white/80">
              <div className="flex items-center gap-2"><Bike className="w-5 h-5 text-emerald-400"/>Bike</div>
              <div className="flex items-center gap-2"><Car className="w-5 h-5 text-emerald-400"/>Car</div>
              <div className="flex items-center gap-2"><Home className="w-5 h-5 text-emerald-400"/>Inverter</div>
            </div>
          </div>

          <div className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6">
            <img src="https://images.unsplash.com/photo-1619641805634-b867f535071c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYXR0ZXJpZXN8ZW58MHwwfHx8MTc2MzQ4Njk3MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Batteries" className="rounded-xl object-cover aspect-[4/3]" />
          </div>
        </div>
      </div>
    </section>
  );
}
