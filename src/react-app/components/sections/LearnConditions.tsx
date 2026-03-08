import { useTranslation } from 'react-i18next';
import { useCondition } from '../../hooks/useHealthAPI';
import CompactConditionCard from '../health/CompactConditionCard';

function LearnConditions() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Fetch both conditions
  const { condition: pcosCondition, loading: pcosLoading, error: pcosError } = useCondition('pcos');
  const { condition: endoCondition, loading: endoLoading, error: endoError } = useCondition('endometriosis');

  const loading = pcosLoading || endoLoading;
  const error = pcosError || endoError;

  return (
    <section className="learn-conditions" id="learn-conditions">
      <div className="container">
        {/* Header */}
        <div className="health-library-header">
          <div className="sec-label" style={{ color: "var(--wine)" }}>
            {t('learnConditions.label')}
          </div>
          <div
            className="sec-title"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
          >
            {t('learnConditions.title')}
          </div>
          <p className="sec-subtitle">
            {t('learnConditions.subtitle')}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="health-loading">
            <div className="loader">
              <div className="loader-pulse"></div>
              <div className="loader-pulse"></div>
              <div className="loader-pulse"></div>
            </div>
            <p>{isArabic ? 'جاري التحميل...' : 'Loading...'}</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="health-error">
            <div className="error-icon">⚠️</div>
            <h3>{isArabic ? 'عذراً، حدث خطأ' : 'Sorry, an error occurred'}</h3>
            <p>{error}</p>
            <button
              className="retry-button"
              onClick={() => window.location.reload()}
            >
              {isArabic ? 'إعادة المحاولة' : 'Try Again'}
            </button>
          </div>
        )}

        {/* Conditions List - Compact Style */}
        {!loading && !error && (
          <div className="compact-layout">
            {pcosCondition && <CompactConditionCard condition={pcosCondition} />}
            {endoCondition && <CompactConditionCard condition={endoCondition} />}
          </div>
        )}

        {/* Educational Footer */}
        {!loading && !error && (
          <div className="health-footer">
            <div className="footer-card">
              <div className="footer-icon">📚</div>
              <h4>{isArabic ? 'هل تريدين معرفة المزيد؟' : 'Want to Learn More?'}</h4>
              <p>
                {isArabic
                  ? 'حيّاة هنا لمساعدتك على فهم جسمك والتحدث مع طبيبك بثقة.'
                  : 'Hayyat is here to help you understand your body and speak to your doctor with confidence.'
                }
              </p>
            </div>

            <div className="footer-card">
              <div className="footer-icon">💛</div>
              <h4>{isArabic ? 'أنتِ لستِ وحدك' : "You're Not Alone"}</h4>
              <p>
                {isArabic
                  ? 'الملايين من النساء في الخليج يعانين من هذه الحالات. أعراضك حقيقية وتستحقين الرعاية.'
                  : 'Millions of women in the Gulf deal with these conditions. Your symptoms are real and you deserve care.'
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default LearnConditions;
