import Section from './Section';
import { portfolio } from '../data/portfolio';

export default function CredentialsSection() {
  return (
    <Section
      id="credentials"
      eyebrow="Education"
      title="Education and certifications that support both technical and business impact."
      description="My graduate training and professional certifications strengthen the analytical, operational, and stakeholder-facing work I bring to data and reporting roles."
      className="py-14 sm:py-16 lg:py-20"
    >
      <div className="section-shell p-6 sm:p-8 lg:p-10">
        <div className="section-inner grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-7 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Education</p>
            <div className="mt-6 space-y-5">
              {portfolio.education.map((item) => (
                <div key={`${item.school}-${item.credential}`} className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0">
                  <h3 className="font-display text-2xl text-ink">{item.credential}</h3>
                  <p className="mt-2 text-base font-semibold text-slate-700">
                    {item.school} | {item.location}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-ink/5 bg-[linear-gradient(180deg,_#112033_0%,_#0f172a_100%)] p-7 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-200">Certifications</p>
            <div className="mt-6 space-y-4">
              {portfolio.certifications.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-base leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
