import { useEffect, useRef, useState } from 'react';
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
  const desktopProjectsRef = useRef(null);
  const mobileNavRef = useRef(null);
  const location = useLocation();
  const projectLinks = portfolio.projectPage.projects.map((project) => ({
    label: project.navLabel || project.title,
    fullLabel: project.title,
    to: project.route || `/projects?section=${slugifyProjectTitle(project.title)}`,
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

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (desktopProjectsRef.current && !desktopProjectsRef.current.contains(event.target)) {
        setIsProjectsOpen(false);
      }

      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setIsMobileProjectsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsProjectsOpen(false);
        setIsMobileProjectsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsProjectsOpen(false);
    setIsMobileProjectsOpen(false);
  };
  const homeSectionHref = (sectionId) => (sectionId === 'home' ? '/' : `/?section=${sectionId}`);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-[999px] border px-4 py-2.5 transition-all duration-300 ${
          isScrolled
            ? 'border-white/80 bg-white/82 shadow-[0_16px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl'
            : 'border-white/65 bg-white/68 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-lg'
        }`}
      >
        <Link
          to="/"
          className="rounded-full px-4 py-2 font-display text-xl text-ink transition duration-300 hover:bg-white/75 hover:shadow-[inset_0_0_0_1px_rgba(226,232,240,0.9)]"
        >
          {portfolio.name}
        </Link>

        <button
          type="button"
          className="inline-flex rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm font-semibold text-ink shadow-sm transition duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          aria-controls="mobile-navigation"
        >
          Menu
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) =>
            link.label === 'Projects' ? (
              <div key={link.label} ref={desktopProjectsRef} className="relative">
                <button
                  type="button"
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                    isProjectsOpen
                      ? 'bg-white text-ink shadow-[0_8px_20px_rgba(15,23,42,0.08)]'
                      : 'text-slate-600 hover:bg-white/80 hover:text-ink hover:shadow-[0_8px_18px_rgba(15,23,42,0.06)]'
                  }`}
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
                    className="absolute left-1/2 top-full z-[60] mt-3 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
                  >
                    <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-slate-200 bg-white" />
                    <div className="relative space-y-1">
                      <Link
                        to="/projects"
                        className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-ink transition hover:bg-slate-50 hover:text-accent"
                        onClick={() => setIsProjectsOpen(false)}
                      >
                        View all projects
                      </Link>
                      {projectLinks.map((project) => (
                        <Link
                          key={project.fullLabel}
                          to={project.to}
                          title={project.fullLabel}
                          className="block truncate rounded-xl px-3 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-slate-50 hover:text-accent"
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
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition duration-300 hover:bg-white/80 hover:text-ink hover:shadow-[0_8px_18px_rgba(15,23,42,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
          ref={mobileNavRef}
          className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-white/75 bg-white/94 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur lg:hidden"
        >
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) =>
              link.label === 'Projects' ? (
                <div key={link.label} className="rounded-2xl border border-slate-200 bg-slate-50/80">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-white hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
                        className="rounded-xl px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-white hover:text-accent"
                        onClick={closeMenu}
                      >
                        View all projects
                      </Link>
                      {projectLinks.map((project) => (
                        <Link
                          key={project.fullLabel}
                          to={project.to}
                          title={project.fullLabel}
                          className="rounded-xl px-4 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-white hover:text-accent"
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
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-white hover:text-accent hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
