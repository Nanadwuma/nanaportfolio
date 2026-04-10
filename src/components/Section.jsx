import { useReveal } from '../hooks/useReveal';

// Reusable wrapper for each major page section.
export default function Section({ id, eyebrow, title, description, children, className = '' }) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
            )}
            {title && <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>}
            {description && <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>}
          </div>
        )}
        <div className={title || description ? 'mt-10' : ''}>{children}</div>
      </div>
    </section>
  );
}
