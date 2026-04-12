import Section from '../components/Section';
import PageLayout from '../components/PageLayout';
import { portfolio } from '../data/portfolio';

function LeadershipRoleCard({ role }) {
  return (
    <article className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-7 shadow-card">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-display text-2xl text-ink">{role.title}</h3>
          <p className="mt-2 text-lg font-semibold text-slate-700">{role.organization}</p>
        </div>

        <div className="text-left sm:text-right">
          {role.period && (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{role.period}</p>
          )}
          {role.location && <p className="mt-2 text-sm text-slate-500">{role.location}</p>}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Duties</p>
          <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
            {role.duties.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Achievements</p>
          <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
            {role.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function LeadershipSkillsPage() {
  const { leadershipPage } = portfolio;

  return (
    <PageLayout>
      <Section
        id="leadership-skills"
        eyebrow={leadershipPage.eyebrow}
        title={leadershipPage.title}
        description={leadershipPage.description}
        className="py-14 sm:py-16 lg:py-20"
      >
        <div className="section-shell p-6 sm:p-8 lg:p-10">
          <div className="section-inner grid gap-6">
            {leadershipPage.roles.map((role) => (
              <LeadershipRoleCard key={`${role.title}-${role.organization}`} role={role} />
            ))}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
