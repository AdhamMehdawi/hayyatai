import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LanguageSwitcher from '../../LanguageSwitcher';

function Navigation() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scrolling to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    // Always navigate to home page with hash
    navigate(`/#${sectionId}`);

    // Scroll to section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // If we're already on the home page, scroll to top
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home and scroll to top
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav>
      <Link to="/" className="logo">
        Hayyat <i>&#1581;&#1610;&#1617;&#1575;&#1577;</i>
      </Link>
      <div className="nav-r">
        <Link to="/" onClick={handleHomeClick}>{t('nav.home')}</Link>
        <a href="#conditions" onClick={(e) => { e.preventDefault(); scrollToSection('conditions'); }}>
          {t('nav.conditions')}
        </a>
        <Link to="/health-library">{t('nav.knowYourBody')}</Link>
        <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>
          {t('nav.howItWorks')}
        </a>
        <a href="#care" onClick={(e) => { e.preventDefault(); scrollToSection('care'); }}>
          {t('nav.yourCare')}
        </a>
        <a href="#stories" onClick={(e) => { e.preventDefault(); scrollToSection('stories'); }}>
          {t('nav.stories')}
        </a>
        <LanguageSwitcher />
        <a href="#join" onClick={(e) => { e.preventDefault(); scrollToSection('join'); }} className="pill pill-primary">
          {t('nav.joinWaitlist')}
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
