import Halo from './Halo.jsx'
import { pasos } from '../content.js'
import '../styles/secciones.css'

export default function Pedir() {
  return (
    <section className="section" id="pedir">
      <h2>
        Pedir tu tabla, en <Halo>tres pasos</Halo>
      </h2>
      <p className="lead">Sin formularios ni vueltas: todo por WhatsApp</p>
      <ol className="steps">
        {pasos.map((p, i) => (
          <li key={p.titulo} className="step">
            <span className="num" aria-hidden="true">{i + 1}</span>
            <h3>{p.titulo}</h3>
            <p>{p.detalle}</p>
          </li>
        ))}
      </ol>
      <p className="zonanote">
        Entregamos en Guadalajara y zona metropolitana; el día y la hora los acomodamos al cotizar
      </p>
    </section>
  )
}
