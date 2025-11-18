const brands = [
  { name: "Amaron", img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Amaron_logo.svg" },
  { name: "Exide", img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Exide_Industries_logo.svg" },
  { name: "Luminous", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Luminous_Power_Technologies_logo.png" },
];

export default function Brands(){
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-2xl font-semibold mb-6">Trusted Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map(b => (
            <div key={b.name} className="bg-white/5 ring-1 ring-white/10 rounded-xl p-6 flex items-center justify-center">
              <img src={b.img} alt={b.name} className="max-h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
