import Section from './Section';
import { portfolio } from '../data/portfolio';

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
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="3.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: portfolio.contact.linkedIn,
    icon: <LinkedInIcon />,
    className: 'text-sky-700 hover:border-sky-200 hover:bg-sky-50',
  },
  {
    label: 'GitHub',
    href: portfolio.contact.github,
    icon: <GitHubIcon />,
    className: 'text-slate-900 hover:border-slate-300 hover:bg-slate-50',
  },
  {
    label: 'Facebook',
    href: portfolio.contact.facebook,
    icon: <FacebookIcon />,
    className: 'text-blue-700 hover:border-blue-200 hover:bg-blue-50',
  },
];

export default function ContactSection() {
  const { sectionContent, contact } = portfolio;

  return (
    <Section
      id="contact"
      eyebrow={sectionContent.contact.eyebrow}
      title={sectionContent.contact.title}
      description="The fastest way to reach me is by email. I’m open to conversations about business analysis, finance transformation, reporting, and analytics opportunities."
      className="py-14 sm:py-16 lg:py-20"
    >
      <div className="section-shell p-6 sm:p-8 lg:p-10">
        <div className="section-inner rounded-[2rem] border border-slate-200/80 bg-white/95 p-7 shadow-card sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Direct Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-3 inline-flex items-center gap-3 text-xl font-semibold text-ink transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:text-2xl"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <MailIcon />
                </span>
                <span className="break-all">{contact.email}</span>
              </a>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Email is the best way to reach me directly for opportunities, collaborations, or professional conversations.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${item.className}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
