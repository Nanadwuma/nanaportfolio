function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M4 6.75h16a1.25 1.25 0 0 1 1.25 1.25v8A1.25 1.25 0 0 1 20 17.25H4A1.25 1.25 0 0 1 2.75 16V8A1.25 1.25 0 0 1 4 6.75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m4 8 8 5 8-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M6.8 8.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Zm-1.2 2h2.4v8h-2.4v-8Zm5 0H13v1.1h.03c.33-.62 1.15-1.27 2.37-1.27 2.53 0 3 1.67 3 3.84v4.32H16v-3.83c0-.91-.02-2.08-1.27-2.08-1.27 0-1.46.99-1.46 2.02v3.89h-2.67v-8Z"
        fill="currentColor"
      />
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="3.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 3.75a8.25 8.25 0 0 0-2.61 16.08c.41.08.56-.18.56-.4v-1.42c-2.28.5-2.77-.97-2.77-.97-.37-.95-.91-1.2-.91-1.2-.74-.5.06-.49.06-.49.82.06 1.25.84 1.25.84.73 1.24 1.91.88 2.38.67.07-.53.29-.88.52-1.08-1.82-.2-3.74-.91-3.74-4.07 0-.9.32-1.64.84-2.21-.08-.21-.36-1.04.08-2.16 0 0 .69-.22 2.26.84a7.8 7.8 0 0 1 4.12 0c1.57-1.06 2.26-.84 2.26-.84.44 1.12.16 1.95.08 2.16.52.57.84 1.31.84 2.21 0 3.17-1.93 3.87-3.77 4.06.3.26.56.77.56 1.56v2.31c0 .22.15.49.57.4A8.25 8.25 0 0 0 12 3.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M13.4 20.25v-6.83h2.3l.34-2.67H13.4V9.04c0-.77.21-1.3 1.32-1.3h1.41V5.35c-.24-.03-1.07-.1-2.03-.1-2 0-3.37 1.22-3.37 3.47v2.03H8.5v2.67h2.27v6.83h2.63Z"
        fill="currentColor"
      />
      <rect
        x="3.75"
        y="3.75"
        width="16.5"
        height="16.5"
        rx="3.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function getIcon(label) {
  if (label === 'Email') return <MailIcon />;
  if (label === 'LinkedIn') return <LinkedInIcon />;
  if (label === 'Facebook') return <FacebookIcon />;
  return <GitHubIcon />;
}

function getIconClasses(label) {
  if (label === 'Email') {
    return 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100';
  }
  if (label === 'LinkedIn') {
    return 'bg-sky-50 text-sky-700 ring-1 ring-sky-100';
  }
  if (label === 'Facebook') {
    return 'bg-blue-50 text-blue-700 ring-1 ring-blue-100';
  }
  return 'bg-slate-900 text-white ring-1 ring-slate-800/10';
}

// Small reusable card for contact details.
export default function ContactCard({ label, value, href, helper }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="rounded-[1.35rem] border border-slate-200/80 bg-white/95 px-4 py-4 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${getIconClasses(label)}`}
        >
          {getIcon(label)}
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{helper}</p>
          <p className="mt-1 truncate text-sm font-semibold text-ink sm:text-base">{value}</p>
        </div>
      </div>
    </a>
  );
}
