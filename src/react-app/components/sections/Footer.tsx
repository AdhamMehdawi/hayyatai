import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-l">
          {t('footer.copyright')}{" "}
          <Link to="/contact">{t('footer.contact')}</Link>
        </div>
        <div className="footer-r">
          {/*<a href="#">{t('footer.privacy')}</a>*/}
          {/*<a href="#">{t('footer.terms')}</a>*/}
          <a
            href="https://linkedin.com/in/adham-mehdawi-02a9a64a"
            target="_blank"
            rel="noreferrer"
          >
            {t('footer.linkedin')}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
