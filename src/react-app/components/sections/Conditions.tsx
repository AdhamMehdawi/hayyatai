import { useTranslation } from 'react-i18next';

function Conditions() {
  const { t } = useTranslation();

  return (
    <section className="conditions" id="conditions">
      <div className="container">
        <div className="cond-grid">
          <div>
            <div className="sec-label" style={{ color: "var(--rose)" }}>
              {t('conditions.label')}
            </div>
            <div
              className="sec-title"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
            >
              {t('conditions.title')}
              <br />
              {t('conditions.titleLine2')}
            </div>
            <p
              style={{
                color: "var(--rose)",
                fontSize: "0.95rem",
                maxWidth: 420,
              }}
            >
              {t('conditions.subtitle')}
            </p>
            <div className="cond-tags">
              <span className="tag tag-active">{t('conditions.tags.pcos')}</span>
              <span className="tag tag-active">{t('conditions.tags.endometriosis')}</span>
              <span className="tag">{t('conditions.tags.painfulPeriods')}</span>
              <span className="tag">{t('conditions.tags.heavyBleeding')}</span>
              <span className="tag">{t('conditions.tags.irregularCycles')}</span>
              <span className="tag">{t('conditions.tags.hormonalAcne')}</span>
              <span className="tag">{t('conditions.tags.excessHair')}</span>
              <span className="tag">{t('conditions.tags.chronicFatigue')}</span>
              <span className="tag">{t('conditions.tags.pelvicPain')}</span>
              <span className="tag">{t('conditions.tags.weightChanges')}</span>
              <span className="tag">{t('conditions.tags.hairLoss')}</span>
              <span className="tag">{t('conditions.tags.moodSwings')}</span>
              <span className="tag">{t('conditions.tags.bloating')}</span>
              <span className="tag">{t('conditions.tags.fertilityConcerns')}</span>
            </div>
            <div className="bothered">
              <p>
                {t('conditions.botheredTitle')}<em>{t('conditions.botheredTitleEmphasized')}</em>{t('conditions.botheredTitleEnd')}
                <br />
                <strong>{t('conditions.botheredText')}</strong>
              </p>
            </div>
          </div>
          <div className="cond-right">
            <div className="scard">
              <div className="num">{t('conditions.stats.stat1Number')}</div>
              <div className="txt">
                {t('conditions.stats.stat1Text')}
              </div>
            </div>
            <div className="scard">
              <div className="num">{t('conditions.stats.stat2Number')}</div>
              <div className="txt">
                {t('conditions.stats.stat2Text')}
              </div>
            </div>
            <div className="scard scard-lg">
              <div className="num">{t('conditions.stats.stat3Number')}</div>
              <div className="txt">
                {t('conditions.stats.stat3Text')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conditions;
