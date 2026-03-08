import { useState } from 'react';
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

interface ConditionCardProps {
  condition: Condition;
  index: number;
}

function ConditionCard({ condition, index }: ConditionCardProps) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  // All sections expanded by default
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['symptoms', 'risk-factors', 'treatments', 'when-doctor'])
  );

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const sections = [
    {
      id: 'symptoms',
      icon: '🔍',
      title: isArabic ? 'الأعراض الشائعة' : 'Common Symptoms',
      items: condition.symptoms.map(s => isArabic ? s.name_ar : s.name_en)
    },
    {
      id: 'risk-factors',
      icon: '⚠️',
      title: isArabic ? 'عوامل الخطر' : 'Risk Factors',
      items: condition.risk_factors.map(r => isArabic ? r.text_ar : r.text_en)
    },
    {
      id: 'treatments',
      icon: '💊',
      title: isArabic ? 'خيارات العلاج' : 'Treatment Options',
      items: condition.treatments.map(t => isArabic ? t.text_ar : t.text_en)
    },
    {
      id: 'when-doctor',
      icon: '🩺',
      title: isArabic ? 'متى تزوري الطبيب' : 'When to See a Doctor',
      items: condition.when_to_doctor.map(w => isArabic ? w.text_ar : w.text_en)
    }
  ];

  return (
    <div className="condition-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="condition-header">
        <div className="condition-number-badge">{index + 1}</div>
        <div className="condition-titles">
          <h3>{isArabic ? condition.title_ar : condition.title_en}</h3>
          <div className="condition-subtitle">
            {isArabic ? condition.title_en : condition.title_ar}
          </div>
        </div>
        {condition.prevalence_stat && (
          <div className="prevalence-badge">
            {condition.prevalence_stat}
          </div>
        )}
      </div>

      <p className="condition-description">
        {isArabic ? condition.description_ar : condition.description_en}
      </p>

      <div className="condition-sections">
        {sections.map((section) => {
          const isExpanded = expandedSections.has(section.id);
          return (
            <div key={section.id} className={`section-item ${isExpanded ? 'expanded' : ''}`}>
              <button
                className="section-header"
                onClick={() => toggleSection(section.id)}
                aria-expanded={isExpanded}
              >
                <span className="section-icon">{section.icon}</span>
                <span className="section-title">{section.title}</span>
                <span className="section-count">{section.items.length}</span>
                <span className="section-toggle">
                  {isExpanded ? '−' : '+'}
                </span>
              </button>

              {isExpanded && (
                <div className="section-content">
                  <div className="items-grid">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="grid-item" style={{ animationDelay: `${idx * 0.05}s` }}>
                        <span className="item-bullet">•</span>
                        <span className="item-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ConditionCard;
