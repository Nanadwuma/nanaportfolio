import Hero from '../components/Hero';
import Section from '../components/Section';
import SkillCard from '../components/SkillCard';
import ContactCard from '../components/ContactCard';
import FeaturedProjects from '../components/FeaturedProjects';
import ExperienceSection from '../components/ExperienceSection';
import CredentialsSection from '../components/CredentialsSection';
import PageLayout from '../components/PageLayout';
import { getContactItems, portfolio } from '../data/portfolio';

const contactItems = getContactItems();
const { sectionContent } = portfolio;

export default function HomePage() {
  return (
    <PageLayout>
      {/* Main introduction area */}
      <Hero />

      {/* About section */}
      <Section
        id="about"
        eyebrow={sectionContent.about.eyebrow}
        title={sectionContent.about.title}
        description={sectionContent.about.description}
        className="py-14 sm:py-16 lg:py-20"
      >
        <div className="section-shell p-6 sm:p-8 lg:p-10">
          <div className="section-inner grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-card">
              <div className="space-y-5 text-lg leading-8 text-slate-600">
                {portfolio.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-ink/5 bg-[linear-gradient(180deg,_#112033_0%,_#0f172a_100%)] p-8 text-white shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-200">What I bring</p>

              <div className="mt-6 space-y-4">
                {sectionContent.about.highlights.map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-base leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <ExperienceSection />

      {/* Skills section */}
      <Section
        id="skills"
        eyebrow={sectionContent.skills.eyebrow}
        title={sectionContent.skills.title}
        description={sectionContent.skills.description}
        className="py-14 sm:py-16 lg:py-20"
      >
        <div className="section-shell p-6 sm:p-8 lg:p-10">
          <div className="section-inner grid gap-6 md:grid-cols-2">
            {portfolio.skills.map((skillGroup) => (
              <SkillCard key={skillGroup.category} {...skillGroup} />
            ))}
          </div>
        </div>
      </Section>

      {/* Featured projects preview section */}
      <FeaturedProjects />

      <CredentialsSection />

      {/* Resume section */}
      <Section
        id="resume"
        eyebrow={sectionContent.resume.eyebrow}
        title={sectionContent.resume.title}
        description={sectionContent.resume.description}
        className="py-14 sm:py-16 lg:py-20"
      >
        <div className="section-shell p-6 sm:p-8 lg:p-10">
          <div className="section-inner grid gap-8 rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-card lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-lg leading-8 text-slate-600">
                This section is ready for job applications and networking. {portfolio.resume.note}
              </p>
            </div>

            <a className="btn-primary" href={portfolio.resume.file} download>
              Download Resume
            </a>
          </div>
        </div>
      </Section>

      {/* Contact section */}
      <Section
        id="contact"
        eyebrow={sectionContent.contact.eyebrow}
        title={sectionContent.contact.title}
        description={sectionContent.contact.description}
        className="py-14 sm:py-16 lg:py-20"
      >
        <div className="section-shell p-6 sm:p-8 lg:p-10">
          <div className="section-inner grid gap-4 md:grid-cols-3">
            {contactItems.map((item) => (
              <ContactCard key={item.label} {...item} />
            ))}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
