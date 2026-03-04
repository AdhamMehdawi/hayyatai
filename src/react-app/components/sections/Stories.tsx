import { useTranslation } from 'react-i18next';

function Stories() {
  const { t } = useTranslation();

  return (
    <section className="stories" id="stories">
      <div className="container">
        <div className="sec-label" style={{ color: "var(--rose)" }}>
          {t('stories.label')}
        </div>
        <div
          className="sec-title"
          style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
        >
          {t('stories.title')}
        </div>
        <p
          style={{
            color: "var(--rose)",
            fontSize: "0.9rem",
            marginBottom: "2rem",
          }}
        >
          {t('stories.subtitle')}
        </p>
        <div className="stories-grid">
          <div className="story">
            <q>
              {t('stories.story1.quote')}
            </q>
            <div className="who">{t('stories.story1.name')}</div>
            <div className="where">{t('stories.story1.location')}</div>
          </div>
          <div className="story">
            <q>
              {t('stories.story2.quote')}
            </q>
            <div className="who">{t('stories.story2.name')}</div>
            <div className="where">{t('stories.story2.location')}</div>
          </div>
          <div className="story">
            <q>
              {t('stories.story3.quote')}
            </q>
            <div className="who">{t('stories.story3.name')}</div>
            <div className="where">{t('stories.story3.location')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
