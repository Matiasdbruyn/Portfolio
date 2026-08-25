// Íconos de línea, todos con el mismo estilo (stroke, sin relleno) para que se vean consistentes.

export function IconSun(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </svg>
  )
}

export function IconMoon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function IconChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function IconExternal(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function IconCode(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  )
}

export function IconBrowser(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
    </svg>
  )
}

export function IconAward(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="8" r="5" />
      <path d="M9 12.5 7 21l5-3 5 3-2-8.5" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1.4 1.4 0 0 1 1.4-.3 10.7 10.7 0 0 0 3.4.5 1.4 1.4 0 0 1 1.4 1.4V20a1.4 1.4 0 0 1-1.4 1.4A17.4 17.4 0 0 1 3 4.4 1.4 1.4 0 0 1 4.4 3h3.2A1.4 1.4 0 0 1 9 4.4a10.7 10.7 0 0 0 .5 3.4 1.4 1.4 0 0 1-.3 1.4Z" />
    </svg>
  )
}

export function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10v6.5M7.5 7.2v.1M12 16.5V13c0-1.4.9-2.4 2.2-2.4 1.3 0 2.1 1 2.1 2.4v3.5" />
    </svg>
  )
}

export function IconGithub(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4.5-1 4.5-4.5a3.6 3.6 0 0 0-1-2.5 3.3 3.3 0 0 0-.1-2.5s-.9-.3-2.9 1a10 10 0 0 0-5 0c-2-1.3-2.9-1-2.9-1a3.3 3.3 0 0 0-.1 2.5 3.6 3.6 0 0 0-1 2.5c0 3.5 2.5 4.3 4.5 4.5-.6.6-.6 1.2-.5 2V19" />
    </svg>
  )
}
