import Hero from './components/Hero'
import Brands from './components/Brands'
import ProductList from './components/ProductList'
import InquiryForm from './components/InquiryForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <Hero />
      <Brands />
      <ProductList />
      <InquiryForm />
      <footer className="py-10 text-center text-white/70">
        <div className="max-w-6xl mx-auto px-6">
          <div>Chirag Battery • Veraval, Gir Somnath</div>
          <div>Call / WhatsApp: <a className="text-emerald-300" href="tel:+919586215548">+91 95862 15548</a></div>
        </div>
      </footer>
    </div>
  )
}

export default App
