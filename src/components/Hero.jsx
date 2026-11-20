import WACta from './WACta.jsx'
import Halo from './Halo.jsx'
import { decoA, decoB, tabla } from '../assets.js'
import { waMessages } from '../content.js'
import '../styles/hero.css'

/** Ramita SVG que sale de la esquina inferior derecha de la foto. */
function Sprig() {
  return (
    <svg className="photo-sprig" viewBox="0 0 120 60" aria-hidden="true">
      <g fill="none" stroke="var(--olive)" strokeWidth="1.6" strokeLinecap="round">
        <path d="M6 52C34 42 66 30 112 10" />
      </g>
      <g fill="var(--olive)">
        <path d="M24 46c-4-9 0-15 6-18 1 8-1 14-6 18z" />
        <path d="M40 40c-1-9 4-14 11-15-1 8-5 13-11 15z" />
        <path d="M58 33c-2-8 2-14 9-16 0 8-3 13-9 16z" />
        <path d="M76 25c-3-7 0-13 7-15 1 7-2 12-7 15z" />
        <path d="M33 40c6 1 11-1 14-6-6-2-11 0-14 6z" />
        <path d="M52 32c6 1 10-1 13-6-6-2-10 0-13 6z" />
        <path d="M70 24c5 1 9-1 12-5-5-2-9 0-12 5z" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <div className="herozone">
      {/* guarniciones laterales: queso (abajo izq) y copa de vino (arriba der) */}
      <img className="deco deco-queso" src={decoA} alt="" aria-hidden="true" />
      <img className="deco deco-copa" src={decoB} alt="" aria-hidden="true" />

      <main className="hero">
        <div className="txtblock">
          <h1>
            El arte de <Halo>compartir</Halo>
          </h1>
          <Halo color="sage" como="script">
            Tu tabla perfecta para cada ocasión
          </Halo>
          <p className="gancho">Haz que tus posadas sean inolvidables</p>
          <p className="sizes">
            Tenemos varios tamaños, desde una cena para dos hasta toda tu posada.
          </p>
        </div>

        <figure className="photo">
          <img
            src={tabla}
            width="960"
            height="1279"
            alt="Tabla de quesos, carnes y frutas de Crema&NataGdl lista para compartir"
          />
          <Sprig />
        </figure>

        <div className="ctablock">
          <p className="urgency">Las posadas ya se acercan: aparta tu fecha</p>
          <WACta texto={waMessages.hero}>Cotiza tu tabla sin compromiso</WACta>
          <p className="micro">
            Dinos cuántos son y qué día, y te respondemos por WhatsApp.
          </p>
        </div>
      </main>
    </div>
  )
}
