// Small reusable card for contact details.
export default function ContactCard({ label, value, href, helper }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="rounded-[1.6rem] border border-slate-200/80 bg-white/95 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{label}</p>
      <p className="mt-4 text-lg font-semibold text-ink break-all">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-500">{helper}</p>
    </a>
  );
}
