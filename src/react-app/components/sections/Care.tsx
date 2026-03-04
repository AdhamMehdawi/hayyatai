import { useTranslation } from 'react-i18next';

function Care() {
  const { t } = useTranslation();

  return (
    <section className="care" id="care">
      <div className="container">
        <div className="sec-label" style={{ color: "var(--rose)" }}>
          {t('care.label')}
        </div>
        <div
          className="sec-title"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
        >
          {t('care.title')}
          <br />
          {t('care.titleLine2')}
        </div>
        <p
          style={{
            color: "var(--rose)",
            fontSize: "0.92rem",
            maxWidth: 500,
            marginBottom: "2rem",
          }}
        >
          {t('care.subtitle')}
        </p>
        <div className="care-grid">
          <div className="ccard">
            <div className="ic">📋</div>
            <h4>{t('care.preVisit.title')}</h4>
            <p>
              {t('care.preVisit.description')}
            </p>
          </div>
          <div className="ccard">
            <div className="ic">💬</div>
            <h4>{t('care.translator.title')}</h4>
            <p>
              {t('care.translator.description')}
            </p>
          </div>
          <div className="ccard">
            <div className="ic">💊</div>
            <h4>{t('care.medication.title')}</h4>
            <p>
              {t('care.medication.description')}
            </p>
          </div>
          <div className="ccard">
            <div className="ic">🛟</div>
            <h4>{t('care.stopCheck.title')}</h4>
            <p>
              {t('care.stopCheck.description')}
            </p>
          </div>
          <div className="ccard">
            <div className="ic">👨‍👩‍👧</div>
            <h4>{t('care.family.title')}</h4>
            <p>
              {t('care.family.description')}
            </p>
          </div>
          <div className="ccard">
            <div className="ic">📅</div>
            <h4>{t('care.missedAppointment.title')}</h4>
            <p>
              {t('care.missedAppointment.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Care;
