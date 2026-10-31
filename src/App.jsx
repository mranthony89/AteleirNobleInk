import { LanguageProvider } from './i18n/LanguageContext.jsx'
import WelcomeOverlay from './components/WelcomeOverlay.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'
import Gallery from './components/Gallery.jsx'
import Aftercare from './components/Aftercare.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-serif text-ink-charcoal">
        <WelcomeOverlay />
        <Navbar />
        <Hero />
        <About />
        <Team />
        <Gallery />
        <Aftercare />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  )
}
