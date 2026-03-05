import { useTranslation } from 'react-i18next';

function Conditions() {
  const { t } = useTranslation();

  return (
    <section className="conditions" id="conditions">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <div className="sec-label" style={{ color: "var(--rose)" }}>
            {t('conditions.label')}
          </div>
          <div className="sec-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
            {t('conditions.title')} {t('conditions.titleLine2')}
          </div>
          <p style={{ color: "var(--rose)", fontSize: "0.95rem", maxWidth: 600, margin: '1rem auto 0' }}>
            {t('conditions.subtitle')}
          </p>
        </div>

        {/* KPI Stats Cards */}
        <div className="dashboard-header">
          <div className="dashboard-kpi">
            <div className="kpi-label">{t('conditions.stats.stat1Label')}</div>
            <div className="kpi-value">{t('conditions.stats.stat1Number')}</div>
            <div className="kpi-desc">{t('conditions.stats.stat1Text')}</div>
          </div>
          <div className="dashboard-kpi dashboard-kpi-alert">
            <div className="kpi-label">{t('conditions.stats.stat2Label')}</div>
            <div className="kpi-value">{t('conditions.stats.stat2Number')}</div>
            <div className="kpi-desc">{t('conditions.stats.stat2Text')}</div>
          </div>
          <div className="dashboard-kpi dashboard-kpi-highlight">
            <div className="kpi-label">{t('conditions.stats.stat3Label')}</div>
            <div className="kpi-value">{t('conditions.stats.stat3Number')}</div>
            <div className="kpi-desc">{t('conditions.stats.stat3Text')}</div>
          </div>
        </div>

        {/* Conditions and Symptoms Sections */}
        <div className="conditions-content">
          <div className="symptoms-section">
            <h4 className="section-subtitle">{t('conditions.groupTitles.primary')}</h4>
            <div className="condition-badges">
              <span className="condition-badge condition-badge-primary">{t('conditions.tags.pcos')}</span>
              <span className="condition-badge condition-badge-primary">{t('conditions.tags.endometriosis')}</span>
            </div>
          </div>

          <div className="symptoms-section">
            <h4 className="section-subtitle">{t('conditions.groupTitles.commonSymptoms')}</h4>
            <div className="condition-badges">
              <span className="condition-badge">{t('conditions.tags.painfulPeriods')}</span>
              <span className="condition-badge">{t('conditions.tags.heavyBleeding')}</span>
              <span className="condition-badge">{t('conditions.tags.irregularCycles')}</span>
              <span className="condition-badge">{t('conditions.tags.pelvicPain')}</span>
              <span className="condition-badge">{t('conditions.tags.bloating')}</span>
              <span className="condition-badge">{t('conditions.tags.chronicFatigue')}</span>
              <span className="condition-badge">{t('conditions.tags.moodSwings')}</span>
              <span className="condition-badge">{t('conditions.tags.fertilityConcerns')}</span>
            </div>
          </div>

          <div className="symptoms-section">
            <h4 className="section-subtitle">{t('conditions.groupTitles.hormonalSymptoms')}</h4>
            <div className="condition-badges">
              <span className="condition-badge">{t('conditions.tags.hormonalAcne')}</span>
              <span className="condition-badge">{t('conditions.tags.excessHair')}</span>
              <span className="condition-badge">{t('conditions.tags.hairLoss')}</span>
              <span className="condition-badge">{t('conditions.tags.weightChanges')}</span>
            </div>
          </div>
        </div>

        {/* Bothered CTA */}
        <div className="bothered">
          <p>
            {t('conditions.botheredTitle')} <em> {t('conditions.botheredTitleEmphasized')} </em> {t('conditions.botheredTitleEnd')}
            <br />
            <strong>{t('conditions.botheredText')}</strong>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Conditions;
