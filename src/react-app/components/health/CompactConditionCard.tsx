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
  prevalence_stat_en: string;
  prevalence_stat_ar: string;
  symptoms: Symptom[];
  risk_factors: RiskFactor[];
  treatments: Treatment[];
  when_to_doctor: WhenToDoctor[];
}

interface CompactConditionCardProps {
  condition: Condition;
}

function CompactConditionCard({ condition }: CompactConditionCardProps) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Get rich description based on condition
  const getRichDescription = () => {
    if (condition.slug === 'pcos') {
      return isArabic
        ? 'متلازمة تكيس المبايض هي حالة هرمونية شائعة تؤثر على النساء في سن الإنجاب. عندما تكونين مصابة بمتلازمة تكيس المبايض، قد تواجهين دورات شهرية نادرة أو طويلة، أو مستويات زائدة من هرمون الذكورة (الأندروجين). قد تتطور العديد من الأكياس الصغيرة المملوءة بالسوائل (الجريبات) على المبايض وتفشل في إطلاق البويضات بانتظام. السبب الدقيق لمتلازمة تكيس المبايض غير معروف، ولكن التشخيص المبكر والعلاج، إلى جانب فقدان الوزن، قد يقلل من خطر المضاعفات طويلة المدى مثل مرض السكري من النوع 2 وأمراض القلب.'
        : 'Polycystic ovary syndrome (PCOS) is a hormonal disorder common among women of reproductive age. Women with PCOS may have infrequent or prolonged menstrual periods or excess male hormone (androgen) levels. The ovaries may develop numerous small collections of fluid (follicles) and fail to regularly release eggs. The exact cause of PCOS is unknown. Early diagnosis and treatment along with weight loss may reduce the risk of long-term complications such as type 2 diabetes and heart disease.';
    } else if (condition.slug === 'endometriosis') {
      return isArabic
        ? 'الانتباذ البطاني الرحمي هو اضطراب مؤلم غالبًا ما ينمو فيه نسيج مشابه للنسيج الذي يبطن الرحم - بطانة الرحم - خارج الرحم. يشمل الانتباذ البطاني الرحمي بشكل شائع المبيضين وقناتي فالوب والنسيج المبطن للحوض. نادرًا ما ينتشر نسيج بطانة الرحم خارج أعضاء الحوض. مع الانتباذ البطاني الرحمي، يستمر النسيج المشابه لبطانة الرحم في العمل كما يفعل عادةً - يصبح أكثر سمكًا، ويتفكك وينزف مع كل دورة شهرية. ولكن لأن هذا النسيج ليس له طريقة للخروج من جسمك، فإنه يصبح محاصرًا. يمكن أن يسبب الانتباذ البطاني الرحمي ألمًا شديدًا، خاصة أثناء الدورات الشهرية.'
        : 'Endometriosis is a painful disorder in which tissue similar to the tissue that normally lines the inside of your uterus — the endometrium — grows outside your uterus. Endometriosis most commonly involves your ovaries, fallopian tubes and the tissue lining your pelvis. Rarely, endometrial-like tissue may be found beyond the area where pelvic organs are located. With endometriosis, the endometrial-like tissue acts as endometrial tissue would — it thickens, breaks down and bleeds with each menstrual cycle. But because this tissue has no way to exit your body, it becomes trapped. Endometriosis can cause severe pain, especially during menstrual periods.';
    }
    return isArabic ? condition.description_ar : condition.description_en;
  };

  return (
    <div className="wide-card">
      {/* Hero Header */}
      <div className="wide-hero">
        <div className="wide-hero-content">
          <div className="wide-title-group">
            <div className="wide-category">{isArabic ? 'صحة المرأة' : 'Women\'s Health'}</div>
            <h2 className="wide-title">{isArabic ? condition.title_ar : condition.title_en}</h2>
          </div>
          {(condition.prevalence_stat_en || condition.prevalence_stat_ar) && (
            <div className="wide-stat">{isArabic ? condition.prevalence_stat_ar : condition.prevalence_stat_en}</div>
          )}
        </div>
      </div>

      {/* Rich Description */}
      <div className="wide-description">
        <p>{getRichDescription()}</p>
      </div>

      {/* All Sections Visible */}
      <div className="wide-sections">
        {/* Symptoms */}
        <section className="wide-section">
          <div className="section-header-wide">
            <span className="section-icon">🔍</span>
            <h3>{isArabic ? 'الأعراض الشائعة' : 'Common Symptoms'}</h3>
          </div>
          <div className="wide-grid">
            {condition.symptoms.map((symptom, idx) => (
              <div key={idx} className="wide-item">
                <span className="item-bullet">•</span>
                <span>{isArabic ? symptom.name_ar : symptom.name_en}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Factors */}
        <section className="wide-section">
          <div className="section-header-wide">
            <span className="section-icon">⚠️</span>
            <h3>{isArabic ? 'عوامل الخطر' : 'Risk Factors'}</h3>
          </div>
          <div className="wide-grid">
            {condition.risk_factors.map((risk, idx) => (
              <div key={idx} className="wide-item">
                <span className="item-bullet">•</span>
                <span>{isArabic ? risk.text_ar : risk.text_en}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Treatments */}
        <section className="wide-section">
          <div className="section-header-wide">
            <span className="section-icon">💊</span>
            <h3>{isArabic ? 'خيارات العلاج' : 'Treatment Options'}</h3>
          </div>
          <div className="wide-grid">
            {condition.treatments.map((treatment, idx) => (
              <div key={idx} className="wide-item">
                <span className="item-bullet">•</span>
                <span>{isArabic ? treatment.text_ar : treatment.text_en}</span>
              </div>
            ))}
          </div>
        </section>

        {/* When to See Doctor */}
        <section className="wide-section doctor-highlight">
          <div className="section-header-wide">
            <span className="section-icon">🩺</span>
            <h3>{isArabic ? 'متى تزورين الطبيب' : 'When to See a Doctor'}</h3>
          </div>
          <div className="wide-grid">
            {condition.when_to_doctor.map((item, idx) => (
              <div key={idx} className="wide-item highlight">
                <span className="item-bullet">✓</span>
                <span>{isArabic ? item.text_ar : item.text_en}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CompactConditionCard;
