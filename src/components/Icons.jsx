/** Íconos de línea, un solo stroke, heredan color via currentColor. Decorativos. */

export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.5L3 21z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2L9 8.5z" />
    </svg>
  )
}

export function Chevron({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function InstagramIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Copo de tres ejes con ramitas, para el badge de temporada. */
export function SnowflakeIcon({ size = 14 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5v19M4 7.2l16 9.6M20 7.2L4 16.8" />
      <path d="M9.6 4.9 12 7.3l2.4-2.4M9.6 19.1 12 16.7l2.4 2.4M3.8 10.3 3.4 7.4l2.9.3M20.2 13.7l.4 2.9-2.9-.3" />
    </svg>
  )
}
