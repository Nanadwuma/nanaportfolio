import Section from './Section';
import { portfolio } from '../data/portfolio';

function DashboardPreviewCard({ dashboard }) {
  return (
    <article className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,_#f8fbfc_0%,_#eef5f7_100%)] p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{dashboard.label}</p>
            <h3 className="mt-2 font-display text-2xl text-ink">{dashboard.title}</h3>
          </div>
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Dashboard
          </span>
        </div>

        <div className="mt-6 space-y-4 rounded-[1.5rem] bg-white p-5 shadow-inner">
          <div className="grid gap-3 sm:grid-cols-3">
            {dashboard.metrics.map((metric) => (
              <div key={metric.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{metric.name}</p>
                <p className="mt-2 text-2xl font-semibold text-ink">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Trend view</p>
              <div className="mt-4 flex h-28 items-end gap-2">
                {dashboard.chartBars.map((height, index) => (
                  <div
                    key={`${dashboard.title}-${index}`}
                    className="flex-1 rounded-t-xl bg-[linear-gradient(180deg,_rgba(15,118,110,0.75)_0%,_rgba(15,23,42,0.9)_100%)]"
                    style={{ height }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Breakdown</p>
              <div className="mt-4 space-y-3">
                {dashboard.breakdown.map((item) => (
                  <div key={item.label}>
                    <div className="mb-1 flex items-center justify-between text-sm text-slate-600">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div className="h-2 rounded-full bg-accent" style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 text-base leading-7 text-slate-600">{dashboard.summary}</p>
    </article>
  );
}

export default function DashboardGallery() {
  return (
    <Section
      id="dashboards"
      eyebrow="Dashboards"
      title={portfolio.projectPage.dashboardTitle}
      description={portfolio.projectPage.dashboardDescription}
      className="py-14 sm:py-16 lg:py-20"
    >
      <div className="section-shell p-6 sm:p-8 lg:p-10">
        <div className="section-inner grid gap-6 lg:grid-cols-2">
          {portfolio.projectPage.dashboards.map((dashboard) => (
            <DashboardPreviewCard key={dashboard.title} dashboard={dashboard} />
          ))}
        </div>
      </div>
    </Section>
  );
}
