import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import DashboardGallery from '../components/DashboardGallery';
import PageLayout from '../components/PageLayout';
import { portfolio } from '../data/portfolio';

export default function ProjectsPage() {
  return (
    <PageLayout>
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="section-shell px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="section-inner grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                  Full project portfolio
                </p>
                <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                  A dedicated page for deeper project detail, more case studies, and dashboard examples.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Use this page to add as many projects as you want. Each card and dashboard block is driven by
                  the data file, so expanding your portfolio later stays straightforward.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-7 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Editing tip</p>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Add or remove projects in <span className="font-semibold text-ink">src/data/portfolio.js</span>{' '}
                  under <span className="font-semibold text-ink">projectPage.projects</span> and{' '}
                  <span className="font-semibold text-ink">projectPage.dashboards</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="projects-list"
        eyebrow="Projects"
        title={portfolio.projectPage.title}
        description={portfolio.projectPage.description}
        className="py-14 sm:py-16 lg:py-20"
      >
        <div className="section-shell p-6 sm:p-8 lg:p-10">
          <div className="section-inner grid gap-6 lg:grid-cols-2">
            {portfolio.projectPage.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Section>

      <DashboardGallery />
    </PageLayout>
  );
}
