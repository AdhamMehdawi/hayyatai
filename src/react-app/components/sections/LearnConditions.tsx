import { useTranslation } from 'react-i18next';

function LearnConditions() {
  const { t } = useTranslation();

  return (
    <section className="learn-conditions" id="learn-conditions">
      <div className="container">
        <div className="sec-label" style={{ color: "var(--wine)" }}>
          {t('learnConditions.label')}
        </div>
        <div
          className="sec-title"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
        >
          {t('learnConditions.title')}
        </div>
        <p
          style={{
            color: "var(--rose)",
            fontSize: "0.95rem",
            maxWidth: 520,
            marginBottom: "3rem",
          }}
        >
          {t('learnConditions.subtitle')}
        </p>

        {/* PCOS */}
        <div className="condition-detail">
          <div className="cond-header">
            <h3>{t('learnConditions.pcos.title')}</h3>
            <div className="cond-ar">{t('learnConditions.pcos.titleAr')}</div>
          </div>
          <p className="cond-desc">
            {t('learnConditions.pcos.description')}
          </p>

          <div className="cond-details-grid">
            <div className="detail-card">
              <h4>{t('learnConditions.pcos.symptomsTitle')}</h4>
              <ul>
                {(t('learnConditions.pcos.symptoms', { returnObjects: true }) as string[]).map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h4>{t('learnConditions.pcos.riskFactorsTitle')}</h4>
              <ul>
                {(t('learnConditions.pcos.riskFactors', { returnObjects: true }) as string[]).map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h4>{t('learnConditions.pcos.treatmentTitle')}</h4>
              <ul>
                {(t('learnConditions.pcos.treatment', { returnObjects: true }) as string[]).map((treatment, index) => (
                  <li key={index}>{treatment}</li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h4>{t('learnConditions.pcos.whenToDoctorTitle')}</h4>
              <ul>
                {(t('learnConditions.pcos.whenToDoctor', { returnObjects: true }) as string[]).map((when, index) => (
                  <li key={index}>{when}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ENDOMETRIOSIS */}
        <div className="condition-detail">
          <div className="cond-header">
            <h3>{t('learnConditions.endometriosis.title')}</h3>
            <div className="cond-ar">{t('learnConditions.endometriosis.titleAr')}</div>
          </div>
          <p className="cond-desc">
            {t('learnConditions.endometriosis.description')}
          </p>

          <div className="cond-details-grid">
            <div className="detail-card">
              <h4>{t('learnConditions.endometriosis.symptomsTitle')}</h4>
              <ul>
                {(t('learnConditions.endometriosis.symptoms', { returnObjects: true }) as string[]).map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h4>{t('learnConditions.endometriosis.riskFactorsTitle')}</h4>
              <ul>
                {(t('learnConditions.endometriosis.riskFactors', { returnObjects: true }) as string[]).map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h4>{t('learnConditions.endometriosis.treatmentTitle')}</h4>
              <ul>
                {(t('learnConditions.endometriosis.treatment', { returnObjects: true }) as string[]).map((treatment, index) => (
                  <li key={index}>{treatment}</li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <h4>{t('learnConditions.endometriosis.whenToDoctorTitle')}</h4>
              <ul>
                {(t('learnConditions.endometriosis.whenToDoctor', { returnObjects: true }) as string[]).map((when, index) => (
                  <li key={index}>{when}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* OTHER CONDITIONS */}
        <div className="other-conditions">
          <h3>{t('learnConditions.otherTitle')}</h3>
          <div className="other-grid">
            <div className="other-card">
              <h4>{t('learnConditions.other.painful.title')}</h4>
              <p>
                {t('learnConditions.other.painful.description')}
              </p>
            </div>
            <div className="other-card">
              <h4>{t('learnConditions.other.heavy.title')}</h4>
              <p>
                {t('learnConditions.other.heavy.description')}
              </p>
            </div>
            <div className="other-card">
              <h4>{t('learnConditions.other.irregular.title')}</h4>
              <p>
                {t('learnConditions.other.irregular.description')}
              </p>
            </div>
            <div className="other-card">
              <h4>{t('learnConditions.other.hormonal.title')}</h4>
              <p>
                {t('learnConditions.other.hormonal.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnConditions;
