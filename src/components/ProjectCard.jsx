// Small reusable card for one portfolio project.
export default function ProjectCard({ project, id }) {
  return (
    <article
      id={id}
      className="group scroll-mt-28 rounded-[2rem] border border-slate-200/80 bg-white/95 p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="max-w-xs font-display text-2xl text-ink">{project.title}</h3>
        <span className="rounded-full border border-accent/15 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Featured
        </span>
      </div>

      <p className="mt-5 text-base leading-7 text-slate-600">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 transition group-hover:border-accent/30 group-hover:text-accent"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200/80 bg-slate-50 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Impact</p>
        <p className="mt-3 text-base leading-7 text-slate-600">{project.impact}</p>
      </div>
    </article>
  );
}
