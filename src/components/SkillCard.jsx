// Small reusable card for one skills category.
export default function SkillCard({ category, items }) {
  return (
    <article className="rounded-[1.9rem] border border-slate-200/80 bg-white/95 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/30">
      <div className="inline-flex rounded-full bg-accent/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Expertise
      </div>
      <h3 className="mt-4 font-display text-2xl text-ink">{category}</h3>
      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
