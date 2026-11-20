import Halo from './Halo.jsx'
import { ocasiones } from '../content.js'
import '../styles/ocasiones.css'

/* Galería "Para cada ocasión": tres composiciones cenitales dibujadas a
   mano en el lenguaje del sitio (strokes vino de 1.5, rellenos rose/sage,
   ramitas y puntos oliva). Decorativas: todo va con aria-hidden. */

/** La mesa de dos: tabla circular, dos copas en diagonal y ramita oliva. */
function MesaDeDos() {
  return (
    <svg className="dibujo" viewBox="0 0 200 140" aria-hidden="true" focusable="false">
      {/* tabla circular cenital, con su orilla interior */}
      <circle cx="100" cy="78" r="50" fill="var(--bg)" stroke="var(--wine)" strokeWidth="1.5" />
      <circle cx="100" cy="78" r="44" fill="none" style={{ stroke: 'rgba(var(--wine-rgb), 0.22)' }} strokeWidth="1" />
      {/* queso en cuña con sus ojos */}
      <path
        d="M57 76c0-10 5-17 15-19 8 5 14 13 14 19-4 6-20 8-29 0z"
        fill="var(--rose)" stroke="var(--wine)" strokeWidth="1.5" strokeLinejoin="round"
      />
      <circle cx="68" cy="70" r="2" fill="var(--card)" />
      <circle cx="77" cy="66" r="1.4" fill="var(--card)" />
      {/* carne enrollada */}
      <ellipse cx="112" cy="98" rx="13" ry="9" fill="var(--sage)" stroke="var(--wine)" strokeWidth="1.5" />
      <path d="M103 98a9 6 0 0 1 18 0" fill="none" stroke="var(--wine)" strokeWidth="1" opacity="0.5" />
      <path d="M106 99a6 4 0 0 0 12 0" fill="none" stroke="var(--wine)" strokeWidth="1" opacity="0.5" />
      {/* uvas */}
      <g fill="var(--olive)" opacity="0.9">
        <circle cx="124" cy="66" r="3" />
        <circle cx="132" cy="68" r="3" />
        <circle cx="128" cy="75" r="3" />
        <circle cx="136" cy="76" r="3" />
        <circle cx="120" cy="74" r="3" />
      </g>
      {/* ramita oliva cruzando la orilla */}
      <path d="M114 58c12-6 22-8 34-8" fill="none" stroke="var(--olive)" strokeWidth="1.5" strokeLinecap="round" />
      <g fill="var(--olive)">
        <path d="M122 55c-2-5 1-8 5-9 0 4-1 7-5 9z" />
        <path d="M132 51c-2-5 1-8 5-9 0 4-1 7-5 9z" />
        <path d="M142 48c-2-5 1-8 5-9 0 4-1 7-5 9z" />
      </g>
      {/* dos copas, en diagonal */}
      <g fill="none" stroke="var(--wine)">
        <ellipse cx="34" cy="26" rx="15" ry="11" strokeWidth="1.5" transform="rotate(-12 34 26)" />
        <ellipse cx="164" cy="118" rx="15" ry="11" strokeWidth="1.5" transform="rotate(10 164 118)" />
        <path d="M24 24a11 8 0 0 1 8-6" strokeWidth="1" opacity="0.4" />
        <path d="M154 116a11 8 0 0 1 8-6" strokeWidth="1" opacity="0.4" />
      </g>
    </svg>
  )
}

/** La reunión: tabla rectangular con quesos y carnes, tres copas arriba. */
function Reunion() {
  return (
    <svg className="dibujo" viewBox="0 0 200 140" aria-hidden="true" focusable="false">
      {/* tres copas */}
      <g fill="none" stroke="var(--wine)">
        <ellipse cx="62" cy="22" rx="13" ry="10" strokeWidth="1.5" transform="rotate(-8 62 22)" />
        <ellipse cx="100" cy="17" rx="13" ry="10" strokeWidth="1.5" />
        <ellipse cx="138" cy="22" rx="13" ry="10" strokeWidth="1.5" transform="rotate(8 138 22)" />
        <path d="M89 15a11 8 0 0 1 8-5" strokeWidth="1" opacity="0.4" />
        <path d="M51 20a11 8 0 0 1 8-5" strokeWidth="1" opacity="0.4" />
        <path d="M127 20a11 8 0 0 1 8-5" strokeWidth="1" opacity="0.4" />
      </g>
      {/* tabla rectangular */}
      <rect x="32" y="40" width="136" height="68" rx="16" fill="var(--bg)" stroke="var(--wine)" strokeWidth="1.5" />
      {/* quesos y carnes, círculos de distintos tamaños */}
      <circle cx="60" cy="64" r="14" fill="var(--rose)" stroke="var(--wine)" strokeWidth="1.5" />
      <path d="M50 60a12 12 0 0 1 10-9" fill="none" stroke="var(--wine)" strokeWidth="1" opacity="0.45" />
      <circle cx="90" cy="56" r="9" fill="var(--sage)" stroke="var(--wine)" strokeWidth="1.5" />
      <circle cx="118" cy="68" r="13" fill="var(--sage)" stroke="var(--wine)" strokeWidth="1.5" />
      <path d="M109 63a11 11 0 0 1 9-7" fill="none" stroke="var(--wine)" strokeWidth="1" opacity="0.45" />
      <circle cx="146" cy="58" r="8" fill="var(--rose)" stroke="var(--wine)" strokeWidth="1.5" />
      <circle cx="78" cy="88" r="8" fill="var(--rose)" stroke="var(--wine)" strokeWidth="1.5" />
      {/* uvas y ramita para completar la mesa */}
      <g fill="var(--olive)" opacity="0.9">
        <circle cx="98" cy="90" r="2.6" />
        <circle cx="106" cy="88" r="2.6" />
        <circle cx="100" cy="97" r="2.6" />
        <circle cx="108" cy="95" r="2.6" />
      </g>
      <path d="M40 99c9-3 17-4 24-4" fill="none" stroke="var(--olive)" strokeWidth="1.5" strokeLinecap="round" />
      <g fill="var(--olive)">
        <path d="M48 96c-2-5 1-8 5-9 0 4-1 7-5 9z" />
        <path d="M57 93c-2-5 1-8 5-9 0 4-1 7-5 9z" />
      </g>
    </svg>
  )
}

/** La posada: la misma mesa, piñata de siete picos colgada y luces arriba. */
function Posada() {
  return (
    <svg className="dibujo" viewBox="0 0 200 140" aria-hidden="true" focusable="false">
      {/* serie de luces puntiformes */}
      <path d="M10 20Q55 32 100 22T190 14" fill="none" style={{ stroke: 'rgba(var(--wine-rgb), 0.4)' }} strokeWidth="1" />
      <g fill="var(--olive)">
        <circle cx="37" cy="29.5" r="2.3" />
        <circle cx="64" cy="31" r="2.3" />
        <circle cx="91" cy="28.5" r="2.3" />
        <circle cx="118" cy="23" r="2.3" />
        <circle cx="145" cy="19.5" r="2.3" />
        <circle cx="172" cy="18" r="2.3" />
      </g>
      {/* piñata colgando de la serie */}
      <path d="M152 15v20" fill="none" stroke="var(--wine)" strokeWidth="1" />
      <path
        d="M152 35 156.6 50.5 171.5 44.4 162.2 57.7 176.4 65.6 160.2 66.5 162.8 82.5 152 70.5 141.2 82.5 143.8 66.5 127.6 65.6 141.8 57.7 132.5 44.4 147.4 50.5Z"
        fill="var(--rose)" stroke="var(--wine)" strokeWidth="1.5" strokeLinejoin="round"
      />
      <circle cx="152" cy="60" r="3" fill="var(--card)" stroke="var(--wine)" strokeWidth="1" />
      <path d="M147 82q-3 9 1 17M157 82q3 9-1 17" fill="none" stroke="var(--wine)" strokeWidth="1" opacity="0.6" />
      {/* la misma mesa de siempre */}
      <rect x="14" y="52" width="112" height="56" rx="14" fill="var(--bg)" stroke="var(--wine)" strokeWidth="1.5" />
      <circle cx="40" cy="74" r="11" fill="var(--rose)" stroke="var(--wine)" strokeWidth="1.5" />
      <path d="M32 70a10 10 0 0 1 8-6" fill="none" stroke="var(--wine)" strokeWidth="1" opacity="0.45" />
      <circle cx="66" cy="66" r="7" fill="var(--sage)" stroke="var(--wine)" strokeWidth="1.5" />
      <circle cx="90" cy="80" r="8" fill="var(--sage)" stroke="var(--wine)" strokeWidth="1.5" />
      <g fill="var(--olive)" opacity="0.9">
        <circle cx="52" cy="93" r="2.6" />
        <circle cx="60" cy="92" r="2.6" />
        <circle cx="56" cy="99" r="2.6" />
      </g>
    </svg>
  )
}

const DIBUJOS = [MesaDeDos, Reunion, Posada]

export default function Occasions() {
  return (
    <section className="section" id="ocaciones">
      <h2>
        Para cada <Halo>ocasión</Halo>
      </h2>
      <p className="lead">Del detalle del aniversario a la mesa llena de la posada</p>
      <div className="ocasiones">
        {ocasiones.map((o, i) => {
          const Dibujo = DIBUJOS[i]
          return (
            <article key={o.titulo} className="ocasion">
              <Dibujo />
              <h3>{o.titulo}</h3>
              <p>{o.desc}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
