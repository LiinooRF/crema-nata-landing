import WACta from './WACta.jsx'
import { waMessages } from '../content.js'
import '../styles/cierre.css'

export default function Cierre() {
  return (
    <section className="band" id="cotiza">
      <p className="script-band" aria-hidden="true">aparta tu fecha</p>
      <h2>¿Cuántos son y qué día?</h2>
      <WACta variante={['claro']} texto={waMessages.general}>
        Escríbenos por WhatsApp
      </WACta>
      <p className="micro-band">Cotiza sin compromiso: te contestamos en un ratito</p>
    </section>
  )
}
