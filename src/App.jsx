import { LanguageProvider } from './i18n/LanguageContext.jsx'
import WelcomeOverlay from './components/WelcomeOverlay.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import Philosophy from './components/Philosophy.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-serif text-ink-charcoal">
        <WelcomeOverlay />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Philosophy />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
