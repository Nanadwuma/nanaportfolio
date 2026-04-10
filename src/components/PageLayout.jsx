import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

// Shared page wrapper so both routes keep the same navigation and footer.
export default function PageLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get('section');

    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#fbfcfd_0%,_#f3f7f9_40%,_#f8fafc_100%)] text-ink">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
