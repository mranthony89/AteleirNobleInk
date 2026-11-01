import { useCallback, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { IntroProvider } from './lib/IntroContext.jsx'
import WelcomeOverlay from './components/WelcomeOverlay.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Styles from './components/Styles.jsx'
import Team from './components/Team.jsx'
import Gallery from './components/Gallery.jsx'
import Reviews from './components/Reviews.jsx'
import Aftercare from './components/Aftercare.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import WhatsAppBar from './components/WhatsAppBar.jsx'
import VideoModal from './components/VideoModal.jsx'

export default function App() {
  const [filmOpen, setFilmOpen] = useState(false)
  const openFilm = useCallback(() => setFilmOpen(true), [])
  const closeFilm = useCallback(() => setFilmOpen(false), [])

  return (
    <LanguageProvider>
      {/* reducedMotion="user": rispetta "riduci movimento" del sistema operativo */}
      <MotionConfig reducedMotion="user">
        <IntroProvider>
          <div className="font-serif text-ink-charcoal">
            <WelcomeOverlay />
            <Navbar />
            <main>
              <Hero onOpenFilm={openFilm} />
              <About />
              <Styles />
              <Team />
              <Gallery />
              <Reviews />
              <Aftercare />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
            <WhatsAppBar />
            <VideoModal open={filmOpen} onClose={closeFilm} />
          </div>
        </IntroProvider>
      </MotionConfig>
    </LanguageProvider>
  )
}
