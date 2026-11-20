import Halo from './Halo.jsx'
import { faqs } from '../content.js'
import '../styles/secciones.css'

export default function Preguntas() {
  return (
    <section className="section" id="preguntas">
      <h2>
        Preguntas <Halo>rápidas</Halo>
      </h2>
      <div className="faq">
        {faqs.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p className="resp">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
