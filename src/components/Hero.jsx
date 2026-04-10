import { Link } from 'react-router-dom';
import { portfolio } from '../data/portfolio';
import profileImage from '../../public/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-12 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_#f9fbfc_0%,_#eef4f7_42%,_#f8fafc_100%)]" />
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-[28rem] max-w-6xl bg-grid bg-[size:34px_34px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.95),transparent)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-glow opacity-90" />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 lg:px-8 lg:pb-28 lg:pt-14">
        <div className="section-shell px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <div className="section-inner grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-accent/15 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent shadow-card">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {portfolio.heroBadge}
              </div>

              <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
                {portfolio.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold text-slate-700 sm:text-xl">{portfolio.headline}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{portfolio.valueStatement}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link className="btn-primary" to="/projects">
                  View Projects
                </Link>
                <a className="btn-secondary" href={portfolio.resume.file} download>
                  Download Resume
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {portfolio.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-slate-200/80 bg-white/90 px-5 py-4 shadow-card"
                  >
                    <p className="font-display text-2xl text-ink">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-6">
              <div className="absolute inset-x-10 top-8 h-40 rounded-full bg-accent/10 blur-3xl" />
              <div className="animate-float rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-soft backdrop-blur-xl">
                <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,_#112033_0%,_#0f172a_100%)] p-8 text-white sm:p-10">
                  <div className="mb-8 flex items-center gap-4">
                    <img
                      src={profileImage}
                      alt={`${portfolio.name} portrait`}
                      className="h-20 w-20 rounded-[1.4rem] object-cover ring-2 ring-white/15"
                    />
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Professional focus</p>
                      <p className="mt-2 text-base font-semibold text-white">{portfolio.name}</p>
                      <p className="mt-1 text-sm text-slate-300">Business analysis, reporting, and finance data solutions</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Profile snapshot</p>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                      Strategy + analysis
                    </span>
                  </div>

                  <div className="mt-10 space-y-6">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Core value</p>
                      <p className="mt-3 text-base leading-7 text-slate-200">
                        Translating data into reporting clarity, better processes, and decision-ready insight.
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                        <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Focus areas</p>
                        <p className="mt-3 text-base leading-7 text-slate-200">Analytics, reporting, automation, and business support.</p>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                        <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Approach</p>
                        <p className="mt-3 text-base leading-7 text-slate-200">Structured, practical, and aligned with stakeholder needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
