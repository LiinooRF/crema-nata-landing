import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Tablas from './components/Tablas.jsx'
import Pedir from './components/Pedir.jsx'
import Preguntas from './components/Preguntas.jsx'
import Cierre from './components/Cierre.jsx'
import Footer from './components/Footer.jsx'
import WACta from './components/WACta.jsx'
import { decoC } from './assets.js'
import { waMessages } from './content.js'
import './styles/layout.css'

export default function App() {
  return (
    <>
      {/* Guarnición fija: tarro de miel, abajo a la derecha en desktop */}
      <img className="deco-fija deco-miel" src={decoC} alt="" aria-hidden="true" />
      <div className="page">
        <Header />
        <Hero />
        <Tablas />
        <Pedir />
        <Preguntas />
        <Cierre />
        <Footer />
      </div>
      {/* CTA flotante, solo móvil */}
      <WACta variante="flotante" texto={waMessages.hero}>
        Cotiza sin compromiso
      </WACta>
    </>
  )
}
