import WACta from './WACta.jsx'
import './Cierre.css'

export default function Cierre() {
  return (
    <div className="band" id="cotiza">
      <div className="script-band">aparta tu fecha</div>
      <h2>¿Cuántos son y qué día?</h2>
      <WACta variante="main claro" texto="¡Hola! Quiero cotizar una tabla">
        Escríbenos por WhatsApp
      </WACta>
      <p className="micro-band">Cotiza sin compromiso: te contestamos en un ratito</p>
    </div>
  )
}
