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
          <div className="section-inner grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-accent/15 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent shadow-card">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {portfolio.heroBadge}
              </div>

              <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[5.1rem]">
                {portfolio.name}
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-slate-800 sm:text-2xl sm:leading-9">
                {portfolio.headline}
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                {portfolio.valueStatement}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link className="btn-primary min-w-[11rem]" to="/projects">
                  View Projects
                </Link>
                <a className="btn-secondary min-w-[11rem]" href={portfolio.resume.file} download>
                  Download Resume
                </a>
              </div>

              <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {portfolio.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-slate-200/80 bg-white/92 px-5 py-5 shadow-card"
                  >
                    <p className="font-display text-2xl text-ink">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-4">
              <div className="absolute inset-x-12 top-10 h-44 rounded-full bg-accent/10 blur-3xl" />
              <div className="animate-float rounded-[2rem] border border-white/80 bg-white/88 p-4 shadow-soft backdrop-blur-xl">
                <div className="rounded-[1.75rem] border border-slate-200/70 bg-[linear-gradient(180deg,_#f7fafc_0%,_#edf4f7_100%)] p-6 text-ink sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                    {portfolio.heroPanel.eyebrow}
                  </p>

                  <div className="mt-5 flex items-center gap-5">
                    <img
                      src={profileImage}
                      alt={`${portfolio.name} portrait`}
                      className="h-32 w-32 rounded-[1.75rem] object-cover ring-4 ring-white shadow-soft"
                    />
                    <div className="max-w-[15rem]">
                      <p className="text-xl font-semibold leading-tight text-ink">{portfolio.name}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                        {portfolio.heroPanel.title}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-slate-200/80 bg-white/88 p-5 shadow-card">
                    <p className="text-sm leading-7 text-slate-700 sm:text-base">{portfolio.heroPanel.summary}</p>
                  </div>

                  <div className="mt-5 rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Core strengths</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {portfolio.heroPanel.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
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
