import { site, wa } from '../config.js'
import { decoD } from '../assets.js'
import { waMessages } from '../content.js'
import { InstagramIcon, WhatsAppIcon } from './Icons.jsx'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="frule" aria-hidden="true">
        <img src={decoD} alt="" />
      </div>
      <p className="brand-footer">{site.nombre}</p>
      <div className="flinks">
        <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener">
          <InstagramIcon size={20} />
          Instagram
        </a>
        <a href={wa(waMessages.general)} target="_blank" rel="noopener">
          <WhatsAppIcon size={20} />
          WhatsApp
        </a>
        <span>{site.ciudad}</span>
      </div>
      <p className="fin">© 2026 {site.nombre}</p>
    </footer>
  )
}
