import { portfolio } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80 py-8 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>{portfolio.name} | Data Analyst Portfolio</p>

        <div className="flex flex-wrap gap-4">
          <a className="interactive-link rounded-full" href={`mailto:${portfolio.contact.email}`}>
            Email
          </a>
          <a
            className="interactive-link rounded-full"
            href={portfolio.contact.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="interactive-link rounded-full"
            href={portfolio.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
