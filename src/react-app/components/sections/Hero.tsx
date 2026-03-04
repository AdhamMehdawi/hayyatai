import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-orb hero-orb-a"></div>
      <div className="hero-orb hero-orb-b"></div>
      <div className="container">
        <div>
          <h1>
            {t('hero.title')}
            <br />
            <em>{t('hero.titleEmphasized')}</em>
          </h1>
          <p className="hero-p">
            {t('hero.subtitle')}
          </p>
          <p className="hero-ar">
            {t('hero.tagline')}
          </p>
          <div className="hero-actions">
            <a
              href="#join"
              className="pill pill-primary"
              style={{ padding: "0.65rem 1.8rem", fontSize: "0.88rem" }}
            >
              {t('hero.ctaPrimary')}
            </a>
            <a
              href="#how-it-works"
              className="pill"
              style={{
                border: "1.5px solid rgba(109,46,70,0.2)",
                color: "var(--wine)",
                padding: "0.65rem 1.8rem",
                fontSize: "0.88rem",
              }}
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
        <div className="phone-wrap">
          <div className="phone">
            <div className="screen">
              <div className="screen-hdr">
                <b>Hayyat</b>
                <small>حيّاة</small>
              </div>
              {/* AI bubble in Arabic */}
              <div className="bub bub-ai">
                {t('hero.chatWelcome')}
              </div>
              {/* User bubble in Arabic */}
              <div className="bub bub-user">
                {t('hero.chatUser1')}
              </div>
              {/* AI bubble in Arabic */}
              <div className="bub bub-ai">
                {t('hero.chatAi2')}
                <div className="chip">{t('hero.chatChip1')}</div>
              </div>
              {/* User bubble in Arabic */}
              <div className="bub bub-user">
                {t('hero.chatUser2')}
              </div>
              {/* AI bubble in Arabic */}
              <div className="bub bub-ai">
                {t('hero.chatAi3')}
                <div className="chip">{t('hero.chatChip2')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
