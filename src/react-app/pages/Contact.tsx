import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

interface FormData {
  name: string;
  email: string;
}

interface ValidationErrors {
  name: boolean;
  email: boolean;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

function ContactPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: ''
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });
  const [errors, setErrors] = useState<ValidationErrors>({
    name: false,
    email: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const newErrors: ValidationErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    };

    setErrors(newErrors);

    // If there are errors, don't submit
    if (newErrors.name || newErrors.email) {
      return;
    }

    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({
        type: 'success',
        message: t('contact.form.success')
      });

      // Reset form
      setFormData({
        name: '',
        email: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle' });
      }, 5000);

    } catch (error) {
      setStatus({
        type: 'error',
        message: t('contact.form.error')
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle' });
      }, 5000);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title" dir={isRTL ? 'rtl' : 'ltr'}>
            {t('contact.title')}
          </h1>
          <p className="contact-subtitle" dir={isRTL ? 'rtl' : 'ltr'}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit} dir={isRTL ? 'rtl' : 'ltr'} noValidate>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.namePlaceholder')}
                    className={errors.name ? 'input-error' : ''}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className={errors.email ? 'input-error' : ''}
                  />
                </div>

                <button
                  type="submit"
                  className="pill pill-primary submit-btn"
                  disabled={status.type === 'loading'}
                >
                  {status.type === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
                </button>

                {status.type === 'success' && (
                  <div className="form-message success-message">
                    {status.message}
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="form-message error-message">
                    {status.message}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="info-card">
                <div className="info-icon">📧</div>
                <h3>{t('contact.form.email')}</h3>
                <a href="mailto:info@hayyat.ai">{t('contact.info.email')}</a>
              </div>

              <div className="info-card">
                <div className="info-icon">⏰</div>
                <h3>{isRTL ? 'وقت الرد' : 'Response Time'}</h3>
                <p>{t('contact.info.availability')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
