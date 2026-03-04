import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-l">
          {t('footer.copyright')}{" "}
          <a href="mailto:info@hayyat.ai">{t('footer.contact')}</a>
        </div>
        <div className="footer-r">
          <a href="#">{t('footer.privacy')}</a>
          <a href="#">{t('footer.terms')}</a>
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
