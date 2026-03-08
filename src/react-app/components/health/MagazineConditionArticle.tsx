import { useTranslation } from 'react-i18next';

interface Symptom {
  name_en: string;
  name_ar: string;
}

interface RiskFactor {
  text_en: string;
  text_ar: string;
}

interface Treatment {
  text_en: string;
  text_ar: string;
}

interface WhenToDoctor {
  text_en: string;
  text_ar: string;
}

interface Condition {
  id: number;
  slug: string;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  prevalence_stat: string;
  symptoms: Symptom[];
  risk_factors: RiskFactor[];
  treatments: Treatment[];
  when_to_doctor: WhenToDoctor[];
}

interface MagazineConditionArticleProps {
  condition: Condition;
}

function MagazineConditionArticle({ condition }: MagazineConditionArticleProps) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <article className="magazine-article">
      {/* Hero Header */}
      <header className="article-hero">
        <div className="hero-content">
          <div className="article-category">
            {isArabic ? 'صحة المرأة' : 'Women\'s Health'}
          </div>
          <h1 className="article-title">
            {isArabic ? condition.title_ar : condition.title_en}
          </h1>
          <p className="article-subtitle">
            {isArabic ? condition.title_en : condition.title_ar}
          </p>
          {condition.prevalence_stat && (
            <div className="hero-stat">
              <span className="stat-number">{condition.prevalence_stat}</span>
              <span className="stat-label">
                {isArabic ? 'من النساء في الخليج' : 'Gulf women affected'}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Introduction */}
      <section className="article-intro">
        <div className="intro-content">
          <p className="lead-paragraph">
            {isArabic ? condition.description_ar : condition.description_en}
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <div className="article-body">
        {/* Symptoms Section */}
        <section className="article-section symptoms-section">
          <div className="section-header-mag">
            <span className="section-icon-large">🔍</span>
            <h2>{isArabic ? 'الأعراض الشائعة' : 'Common Symptoms'}</h2>
          </div>
          <div className="magazine-grid">
            {condition.symptoms.map((symptom, idx) => (
              <div key={idx} className="magazine-item">
                <div className="item-number">{String(idx + 1).padStart(2, '0')}</div>
                <div className="item-content">
                  {isArabic ? symptom.name_ar : symptom.name_en}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pull Quote */}
        <aside className="pull-quote">
          <blockquote>
            {isArabic
              ? 'أعراضك حقيقية. أنتِ تستحقين أن تُسمعي وأن تُعتنى بك.'
              : 'Your symptoms are real. You deserve to be heard and cared for.'}
          </blockquote>
        </aside>

        {/* Risk Factors Section */}
        <section className="article-section risk-section">
          <div className="section-header-mag">
            <span className="section-icon-large">⚠️</span>
            <h2>{isArabic ? 'عوامل الخطر' : 'Risk Factors'}</h2>
          </div>
          <div className="two-column-text">
            <ul className="styled-list">
              {condition.risk_factors.map((factor, idx) => (
                <li key={idx}>
                  {isArabic ? factor.text_ar : factor.text_en}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="article-section treatment-section">
          <div className="section-header-mag">
            <span className="section-icon-large">💊</span>
            <h2>{isArabic ? 'خيارات العلاج' : 'Treatment Options'}</h2>
          </div>
          <div className="treatment-grid">
            {condition.treatments.map((treatment, idx) => (
              <div key={idx} className="treatment-card">
                <div className="treatment-number">{idx + 1}</div>
                <p>{isArabic ? treatment.text_ar : treatment.text_en}</p>
              </div>
            ))}
          </div>
        </section>

        {/* When to See Doctor - Feature Box */}
        <section className="article-section doctor-section">
          <div className="feature-box">
            <div className="section-header-mag">
              <span className="section-icon-large">🩺</span>
              <h2>{isArabic ? 'متى تزورين الطبيب' : 'When to See a Doctor'}</h2>
            </div>
            <p className="feature-intro">
              {isArabic
                ? 'استشيري طبيبك إذا كنت تعانين من أي من هذه الأعراض:'
                : 'Consult your doctor if you experience any of these:'}
            </p>
            <div className="doctor-list">
              {condition.when_to_doctor.map((item, idx) => (
                <div key={idx} className="doctor-item">
                  <span className="check-icon">✓</span>
                  <span>{isArabic ? item.text_ar : item.text_en}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Article Footer */}
      <footer className="article-footer">
        <div className="footer-message">
          <p className="footer-text">
            {isArabic
              ? 'حيّاة هنا لمساعدتك على فهم جسمك والتحدث مع طبيبك بثقة.'
              : 'Hayyat is here to help you understand your body and speak to your doctor with confidence.'}
          </p>
        </div>
      </footer>
    </article>
  );
}

export default MagazineConditionArticle;
