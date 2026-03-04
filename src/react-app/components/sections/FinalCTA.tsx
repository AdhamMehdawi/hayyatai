import { useTranslation } from 'react-i18next';

function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="final-cta" id="join">
      <div className="container">
        <div className="cta-phones">
          <div className="cta-ph">
            <div className="cta-ph-in">
              <span>{t('finalCta.phone1')}</span>
              <small>{t('finalCta.phone1')}</small>
            </div>
          </div>
          <div className="cta-ph">
            <div className="cta-ph-in">
              <span>{t('finalCta.phone2')}</span>
              <small>{t('finalCta.phone2')}</small>
            </div>
          </div>
          <div className="cta-ph">
            <div className="cta-ph-in">
              <span>{t('finalCta.phone3')}</span>
              <small>{t('finalCta.phone3')}</small>
            </div>
          </div>
        </div>
        <div className="sec-title">{t('finalCta.title')}</div>
        <p
          style={{
            fontFamily: "'Noto Kufi Arabic', sans-serif",
            direction: "rtl",
            fontSize: "1.15rem",
            color: "var(--gold)",
            fontWeight: 600,
            marginBottom: "0.4rem",
          }}
        >
          {t('finalCta.subtitle')}
        </p>
        <p
          style={{
            color: "var(--rose)",
            fontSize: "0.95rem",
            marginBottom: "1.8rem",
          }}
        >
          {t('finalCta.description')}
        </p>
        <a
          href="mailto:info@hayyat.ai?subject=Hayyat%20Waitlist&body=I'd%20like%20to%20join%20the%20Hayyat%20waitlist."
          className="pill pill-primary"
          style={{ fontSize: "0.95rem", padding: "0.75rem 2.2rem" }}
        >
          {t('finalCta.cta')}
        </a>
        <p
          style={{
            fontSize: "0.72rem",
            color: "var(--warm-gray)",
            marginTop: "1rem",
          }}
        >
          {t('finalCta.note')}
        </p>
      </div>
    </section>
  );
}

export default FinalCTA;
