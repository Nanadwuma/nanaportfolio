function VisualCard({ visual }) {
  if (visual.kind === 'metrics') {
    return (
      <article className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-card">
        <h4 className="font-display text-2xl text-ink">{visual.title}</h4>
        <p className="mt-3 text-base leading-7 text-slate-600">{visual.description}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {visual.metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{metric.label}</p>
              <p className="mt-2 text-3xl font-semibold text-ink">{metric.value}</p>
            </div>
          ))}
        </div>
      </article>
    );
  }

  if (visual.kind === 'bars') {
    return (
      <article className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-card">
        <h4 className="font-display text-2xl text-ink">{visual.title}</h4>
        <p className="mt-3 text-base leading-7 text-slate-600">{visual.description}</p>
        <div className="mt-6 space-y-4">
          {visual.items.map((item) => (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between gap-4 text-sm text-slate-600">
                <span>{item.label}</span>
                <span className="font-semibold text-ink">{item.value}</span>
              </div>
              <div className="h-3 rounded-full bg-slate-200">
                <div
                  className="h-3 rounded-full bg-[linear-gradient(90deg,_rgba(13,148,136,0.9)_0%,_rgba(30,41,59,0.95)_100%)]"
                  style={{ width: item.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </article>
    );
  }

  if (visual.kind === 'comparison') {
    return (
      <article className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-card">
        <h4 className="font-display text-2xl text-ink">{visual.title}</h4>
        <p className="mt-3 text-base leading-7 text-slate-600">{visual.description}</p>
        <div className="mt-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
            {visual.leftLabel}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            {visual.rightLabel}
          </span>
        </div>
        <div className="mt-6 space-y-4">
          {visual.rows.map((row) => (
            <div key={row.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{row.label}</p>
                <div className="flex gap-4 text-sm font-semibold text-ink">
                  <span>{row.leftValue}</span>
                  <span>{row.rightValue}</span>
                </div>
              </div>
              <div className="mt-3 grid gap-2">
                <div className="h-2.5 rounded-full bg-slate-200">
                  <div className="h-2.5 rounded-full bg-teal-600" style={{ width: row.leftValue }} />
                </div>
                <div className="h-2.5 rounded-full bg-slate-200">
                  <div className="h-2.5 rounded-full bg-slate-700" style={{ width: row.rightValue }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    );
  }

  if (visual.kind === 'split') {
    return (
      <article className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-card">
        <h4 className="font-display text-2xl text-ink">{visual.title}</h4>
        <p className="mt-3 text-base leading-7 text-slate-600">{visual.description}</p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-teal-100 bg-teal-50/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">{visual.leftTitle}</p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
              {visual.leftItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-amber-100 bg-amber-50/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">{visual.rightTitle}</p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
              {visual.rightItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-card">
      <h4 className="font-display text-2xl text-ink">{visual.title}</h4>
      <p className="mt-3 text-base leading-7 text-slate-600">{visual.description}</p>
      <ul className="mt-6 space-y-3 text-base leading-7 text-slate-700">
        {visual.items.map((item) => (
          <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

// Featured thesis layout for the Projects page.
export default function ThesisCaseStudy({ project, id }) {
  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-[2.25rem] border border-slate-200/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(245,248,250,0.96)_100%)] p-6 shadow-card sm:p-8 lg:col-span-2 lg:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Featured research project
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Thesis
            </span>
          </div>

          <h3 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">{project.title}</h3>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{project.subtitle}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.deliverables.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {project.detailSections.map((section) => (
              <div key={section.title} className="rounded-[1.6rem] border border-slate-200 bg-white/90 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{section.title}</p>
                <p className="mt-3 text-base leading-7 text-slate-600">{section.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Project impact</p>
          <p className="mt-4 text-lg leading-8 text-slate-700">{project.impact}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {project.highlightMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{metric.label}</p>
                <p className="mt-2 text-3xl font-semibold text-ink">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white/90 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">What stands out</p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {project.findings.map((finding) => (
            <div key={finding} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-base leading-7 text-slate-700">
              {finding}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Thesis visuals</p>
          <h4 className="mt-4 font-display text-3xl leading-tight text-ink">Presentation highlights brought into the portfolio.</h4>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            These cards translate the key visuals from the defense presentation into a web-friendly format so visitors can quickly understand the research design, results, and implications.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {project.visuals.map((visual) => (
            <VisualCard key={visual.title} visual={visual} />
          ))}
        </div>
      </div>
    </article>
  );
}
