import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Tablas from './components/Tablas.jsx'
import Occasions from './components/Occasions.jsx'
import Pedir from './components/Pedir.jsx'
import Preguntas from './components/Preguntas.jsx'
import Cierre from './components/Cierre.jsx'
import Footer from './components/Footer.jsx'
import WACta from './components/WACta.jsx'
import { decoC } from './assets.js'
import { waMessages } from './content.js'
import './styles/layout.css'

/**
 * El CTA flotante de móvil solo aparece cuando el usuario ya pasó el hero:
 * observamos .herozone y nos fijamos si sigue a la vista (recortando 100px
 * del fondo). Sin IntersectionObserver, caemos al comportamiento anterior.
 */
function useCtaVisible() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.herozone')
    if (!hero || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '0px 0px -100px 0px' },
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  return visible
}

export default function App() {
  const ctaVisible = useCtaVisible()

  return (
    <>
      {/* Guarnición fija: tarro de miel, abajo a la derecha en desktop */}
      <img className="deco-fija deco-miel" src={decoC} alt="" aria-hidden="true" />
      <div className="page">
        <Header />
        <Hero />
        <Tablas />
        <Occasions />
        <Pedir />
        <Preguntas />
        <Cierre />
        <Footer />
      </div>
      {/* CTA flotante, solo móvil, una vez pasado el hero */}
      <WACta variante="flotante" texto={waMessages.hero} visible={ctaVisible}>
        Cotiza sin compromiso
      </WACta>
    </>
  )
}
