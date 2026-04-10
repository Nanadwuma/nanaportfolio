import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import DashboardGallery from '../components/DashboardGallery';
import PageLayout from '../components/PageLayout';
import { portfolio } from '../data/portfolio';

function slugifyProjectTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function ProjectsPage() {
  return (
    <PageLayout>
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
              <ProjectCard
                key={project.title}
                id={slugifyProjectTitle(project.title)}
                project={{
                  ...project,
                  summary: project.previewSummary || project.summary,
                  impact: project.previewImpact || project.impact,
                }}
              />
            ))}
          </div>
        </div>
      </Section>

      <DashboardGallery />
    </PageLayout>
  );
}
