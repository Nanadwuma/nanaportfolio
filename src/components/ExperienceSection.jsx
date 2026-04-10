import Section from './Section';
import { portfolio } from '../data/portfolio';

export default function ExperienceSection() {
  const { experience, sectionContent } = portfolio;

  return (
    <Section
      id="experience"
      eyebrow={sectionContent.experience.eyebrow}
      title={sectionContent.experience.title}
      description={sectionContent.experience.description}
      className="py-14 sm:py-16 lg:py-20"
    >
      <div className="section-shell p-6 sm:p-8 lg:p-10">
        <div className="section-inner space-y-6">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-7 shadow-card"
            >
              <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="font-display text-2xl text-ink">{item.role}</h3>
                  <p className="mt-2 text-base font-semibold text-slate-700">
                    {item.company} | {item.location}
                  </p>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{item.period}</p>
              </div>

              <ul className="mt-5 space-y-3 text-base leading-7 text-slate-600">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
