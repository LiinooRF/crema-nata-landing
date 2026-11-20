/**
 * Botón de contacto por WhatsApp. Los 7 CTAs del sitio son instancias de
 * este componente; el mensaje prefijado llega listo desde content.js.
 *
 * Props:
 * - texto: mensaje prefijado del chat (obligatorio; viene de waMessages).
 * - children: etiqueta visible del botón.
 * - variante:
 *     'base'      — botón vino estándar (hero, tarjetas). Default.
 *     'claro'     — botón crema, para posarse sobre la banda vino del cierre.
 *     'flotante'  — barra fija abajo, solo móvil (envuelta en .cta-flotante).
 *   Se pueden combinar con un array: variante={['claro']}.
 */
import { wa } from '../config.js'
import { WhatsAppIcon, Chevron } from './Icons.jsx'
import '../styles/wacta.css'

export default function WACta({ texto, children, variante = ['base'] }) {
  const variantes = Array.isArray(variante) ? variante : [variante]
  return (
    <a
      className={['cta', ...variantes].join(' ')}
      href={wa(texto)}
      target="_blank"
      rel="noopener"
    >
      <WhatsAppIcon size={24} />
      <span className="cta-sep" aria-hidden="true" />
      <span className="cta-txt">{children}</span>
      <Chevron size={20} />
    </a>
  )
}
