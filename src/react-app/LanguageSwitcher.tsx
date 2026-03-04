import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    // Update document direction for RTL/LTR support
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    // Save language preference to localStorage
    localStorage.setItem('hayyat-language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="lang-switcher"
      aria-label={i18n.language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      {i18n.language === 'ar' ? 'EN' : 'ع'}
    </button>
  );
}

export default LanguageSwitcher;
