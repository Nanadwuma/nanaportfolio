import Section from '../components/Section';
import ThesisCaseStudy from '../components/ThesisCaseStudy';
import PageLayout from '../components/PageLayout';
import { portfolio } from '../data/portfolio';

const thesisProject = portfolio.projectPage.projects.find((project) => project.title === 'Thesis');

export default function ThesisPage() {
  return (
    <PageLayout>
      <Section
        id="thesis-case-study"
        eyebrow="Thesis"
        title="Graduate thesis case study."
        description="A dedicated view of the research problem, technical approach, findings, and presentation visuals behind my NLP-based privacy policy compliance thesis."
        className="py-14 sm:py-16 lg:py-20"
      >
        <div className="section-shell p-6 sm:p-8 lg:p-10">
          <div className="section-inner">
            <ThesisCaseStudy id="thesis" project={thesisProject} />
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
