import { WhatsAppIcon, Chevron } from './Icons.jsx'
import { wa } from '../config.js'
import './WACta.css'

/**
 * Botón principal de WhatsApp.
 * Props: texto (mensaje prefijado), children (etiqueta),
 * variante: '' (hero, se oculta en móvil) | 'main' (igual que '') |
 *           'float' (fijo abajo, solo móvil) | 'claro' (sobre banda vino).
 */
export default function WACta({ texto, children, variante = '' }) {
  const clase = variante === 'main' ? 'cta cta-main' : `cta ${variante}`
  return (
    <a className={clase} href={wa(texto)} target="_blank" rel="noopener">
      <WhatsAppIcon size={24} />
      <span className="sep" />
      <span className="txt">{children}</span>
      <Chevron size={20} />
    </a>
  )
}
