import { useTranslation } from 'react-i18next';

function Understand() {
  const { t } = useTranslation();

  return (
    <section className="understand">
      <div className="container">
        <div className="understand-ar">
          "{t('understand.quoteAr')}"
        </div>
        <div className="understand-en">
          "{t('understand.quoteEn')}"
        </div>
        <p>
          {t('understand.description')}
        </p>
      </div>
    </section>
  );
}

export default Understand;
