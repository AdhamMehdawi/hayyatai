import { useTranslation } from 'react-i18next';

function Trusted() {
  const { t } = useTranslation();

  return (
    <section className="trusted">
      <div className="container">
        <p>{t('trusted.title')}</p>
        <div className="trust-row">
          <span className="trust-item">{t('trusted.items.qstp')}</span>
          <span className="trust-item">{t('trusted.items.merck')}</span>
          <span className="trust-item">{t('trusted.items.rotterdam')}</span>
          <span className="trust-item">{t('trusted.items.chapron')}</span>
          <span className="trust-item">{t('trusted.items.dataset')}</span>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
