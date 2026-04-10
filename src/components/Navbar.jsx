import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, portfolio } from '../data/portfolio';

function slugifyProjectTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Sticky navigation bar with a simple mobile menu.
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const location = useLocation();
  const projectLinks = portfolio.projectPage.projects.map((project) => ({
    label: project.title,
    to: `/projects?section=${slugifyProjectTitle(project.title)}`,
  }));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsProjectsOpen(false);
    setIsMobileProjectsOpen(false);
  }, [location.pathname, location.search]);

  const closeMenu = () => {
    setIsOpen(false);
    setIsProjectsOpen(false);
    setIsMobileProjectsOpen(false);
  };
  const homeSectionHref = (sectionId) => (sectionId === 'home' ? '/' : `/?section=${sectionId}`);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
          isScrolled
            ? 'border-white/70 bg-white/88 shadow-soft backdrop-blur-xl'
            : 'border-white/50 bg-white/70 backdrop-blur-lg'
        }`}
      >
        <Link to="/" className="font-display text-xl text-ink interactive-link rounded-full">
          {portfolio.name}
        </Link>

        <button
          type="button"
          className="inline-flex rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          aria-controls="mobile-navigation"
        >
          Menu
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) =>
            link.label === 'Projects' ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  className="interactive-link inline-flex items-center gap-2 rounded-full text-sm font-semibold text-slate-600"
                  onClick={() => setIsProjectsOpen((current) => !current)}
                  aria-expanded={isProjectsOpen}
                  aria-controls="projects-dropdown"
                >
                  <span>{link.label}</span>
                  <span className={`text-xs transition ${isProjectsOpen ? 'rotate-180' : ''}`}>▾</span>
                </button>

                {isProjectsOpen && (
                  <div
                    id="projects-dropdown"
                    className="absolute right-0 top-11 z-50 w-80 rounded-3xl border border-slate-200/90 bg-white/98 p-3 shadow-soft backdrop-blur"
                  >
                    <div className="space-y-2">
                      <Link
                        to="/projects"
                        className="block rounded-2xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-slate-50 hover:text-accent"
                        onClick={() => setIsProjectsOpen(false)}
                      >
                        View all projects
                      </Link>
                      {projectLinks.map((project) => (
                        <Link
                          key={project.label}
                          to={project.to}
                          className="block rounded-2xl px-4 py-3 text-sm leading-6 text-slate-600 transition hover:bg-slate-50 hover:text-accent"
                          onClick={() => setIsProjectsOpen(false)}
                        >
                          {project.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.isRoute ? link.href : homeSectionHref(link.sectionId)}
                className="interactive-link rounded-full text-sm font-semibold text-slate-600"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/70 bg-white/95 p-4 shadow-soft backdrop-blur lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) =>
              link.label === 'Projects' ? (
                <div key={link.label} className="rounded-2xl border border-slate-200 bg-slate-50/70">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    onClick={() => setIsMobileProjectsOpen((current) => !current)}
                    aria-expanded={isMobileProjectsOpen}
                  >
                    <span>{link.label}</span>
                    <span className={`text-xs transition ${isMobileProjectsOpen ? 'rotate-180' : ''}`}>▾</span>
                  </button>

                  {isMobileProjectsOpen && (
                    <div className="flex flex-col gap-1 px-2 pb-2">
                      <Link
                        to="/projects"
                        className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-white hover:text-accent"
                        onClick={closeMenu}
                      >
                        View all projects
                      </Link>
                      {projectLinks.map((project) => (
                        <Link
                          key={project.label}
                          to={project.to}
                          className="rounded-2xl px-4 py-3 text-sm leading-6 text-slate-600 transition hover:bg-white hover:text-accent"
                          onClick={closeMenu}
                        >
                          {project.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.isRoute ? link.href : homeSectionHref(link.sectionId)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
