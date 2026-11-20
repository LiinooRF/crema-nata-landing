import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Tablas from './components/Tablas.jsx'
import Pedir from './components/Pedir.jsx'
import Preguntas from './components/Preguntas.jsx'
import Cierre from './components/Cierre.jsx'
import Footer from './components/Footer.jsx'
import WACta from './components/WACta.jsx'
import { decoC } from './assets.js'
import './App.css'

export default function App() {
  return (
    <>
      <img className="deco-fija dc" src={decoC} alt="" aria-hidden="true" />
      <div className="page">
        <Header />
        <Hero />
        <Tablas />
        <Pedir />
        <Preguntas />
        <Cierre />
        <Footer />
      </div>
      {/* CTA flotante solo móvil */}
      <div className="solo-movil">
        <WACta variante="float" texto="¡Hola! Quiero cotizar una tabla para compartir">
          Cotiza sin compromiso
        </WACta>
      </div>
    </>
  )
}
