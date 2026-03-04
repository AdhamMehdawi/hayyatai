import { useTranslation } from 'react-i18next';

function BuiltForYou() {
  const { t } = useTranslation();

  return (
    <section className="built">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="sec-label" style={{ color: "var(--gold)" }}>
          {t('built.label')}
        </div>
        <div
          className="sec-title"
          style={{
            color: "var(--white)",
            fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
          }}
        >
          {t('built.title')}
          <br />
          {t('built.titleLine2')}
        </div>
        <div className="built-grid" style={{ textAlign: "left" }}>
          <div className="bcard">
            <h4>{t('built.realArabic.title')}</h4>
            <p>
              {t('built.realArabic.description')}
            </p>
          </div>
          <div className="bcard">
            <h4>{t('built.ramadan.title')}</h4>
            <p>
              {t('built.ramadan.description')}
            </p>
          </div>
          <div className="bcard">
            <h4>{t('built.privacy.title')}</h4>
            <p>
              {t('built.privacy.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuiltForYou;
