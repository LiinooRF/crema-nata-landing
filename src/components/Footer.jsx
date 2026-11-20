import { site, wa } from '../config.js'
import { decoD } from '../assets.js'
import { InstagramIcon, WhatsAppIcon } from './Icons.jsx'
import WACta from './WACta.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="frule">
        <img src={decoD} alt="" aria-hidden="true" />
      </div>
      <div className="brand" style={{ fontSize: '1.6rem' }}>{site.nombre}</div>
      <div className="flinks">
        <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener">
          <InstagramIcon size={20} />
          Instagram
        </a>
        <a href={wa('¡Hola! Quiero cotizar una tabla')} target="_blank" rel="noopener">
          <WhatsAppIcon size={20} />
          WhatsApp
        </a>
        <span>{site.ciudad}</span>
      </div>
      <p className="fin">© 2026 {site.nombre}</p>
    </footer>
  )
}
