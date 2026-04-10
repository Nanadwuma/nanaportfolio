import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import Section from './Section';
import { portfolio } from '../data/portfolio';

// Home page preview that points visitors to the full Projects page.
export default function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow={portfolio.sectionContent.projects.eyebrow}
      title="Featured work, with a full case-study page available."
      description="The homepage keeps things concise. The dedicated Projects page gives you room for more case studies, dashboard examples, and future additions."
      className="py-14 sm:py-16 lg:py-20"
    >
      <div className="section-shell p-6 sm:p-8 lg:p-10">
        <div className="section-inner space-y-8">
          <div className="max-w-4xl rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-6 shadow-card">
            <p className="text-base leading-8 text-slate-600">
              These projects highlight my ability to use Python, SQL, Power BI, Excel, and business analysis
              skills to solve practical data challenges. They demonstrate strengths in automation, reporting,
              data validation, dashboard development, and transforming complex datasets into insights that
              support better business decisions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {portfolio.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-card sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-semibold text-ink">Want to show more dashboards and more projects?</p>
              <p className="mt-2 text-base leading-7 text-slate-600">
                Use the full Projects page to add additional portfolio items without making the homepage feel crowded.
              </p>
            </div>

            <Link className="btn-primary" to="/projects">
              View Full Projects Page
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
