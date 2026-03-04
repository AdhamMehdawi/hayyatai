import { useTranslation } from 'react-i18next';

function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="how" id="how-it-works">
      <div className="container">
        <div className="sec-label" style={{ color: "var(--gold)" }}>
          {t('how.label')}
        </div>
        <div
          className="sec-title"
          style={{
            color: "var(--white)",
            fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          }}
        >
          {t('how.title')}
          <br />
          {t('how.titleLine2')}
        </div>
        <div className="how-steps">
          <div className="how-step">
            <div className="step-circle">1</div>
            <h3>{t('how.step1Title')}</h3>
            <div className="ar">{t('how.step1Ar')}</div>
            <p>
              {t('how.step1Description')}
            </p>
          </div>
          <div className="how-step">
            <div className="step-circle">2</div>
            <h3>{t('how.step2Title')}</h3>
            <div className="ar">{t('how.step2Ar')}</div>
            <p>
              {t('how.step2Description')}
            </p>
          </div>
          <div className="how-step">
            <div className="step-circle">3</div>
            <h3>{t('how.step3Title')}</h3>
            <div className="ar">{t('how.step3Ar')}</div>
            <p>
              {t('how.step3Description')}
            </p>
          </div>
        </div>
        <div className="how-note">
          {t('how.note')}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
