import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguageStore } from '@/stores/languageStore';
import { t } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguageStore();

  return (
    <footer className={`bg-primary text-primary-foreground mt-24 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="mx-auto max-w-[120rem] px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl mb-6">{t('companyName', language)}</h3>
            <p className="font-paragraph text-sm text-primary-foreground/80">
              {t('companyDesc', language)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-6">{t('quickLinks', language)}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tetra" className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  {t('tetratech', language)}
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  {t('about', language)}
                </Link>
              </li>
              <li>
                <Link to="/devices" className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  {t('devices', language)}
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  {t('jobs', language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-xl mb-6">{t('services', language)}</h3>
            <ul className="space-y-3">
              <li className="font-paragraph text-sm text-primary-foreground/80">{t('networkInfra', language)}</li>
              <li className="font-paragraph text-sm text-primary-foreground/80">{t('radioCom', language)}</li>
              <li className="font-paragraph text-sm text-primary-foreground/80">{t('techSupport', language)}</li>
              <li className="font-paragraph text-sm text-primary-foreground/80">{t('systemIntegration', language)}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl mb-6">{t('contactInfo', language)}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-sm text-primary-foreground/80">
                  {t('location', language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-sm text-primary-foreground/80">
                  {t('phone', language)}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <Link 
                  to="/contact" 
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {t('contactForm', language)}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col gap-4">
            <p className="font-paragraph text-sm text-primary-foreground/60 text-center">
              {t('copyright', language).replace('{year}', new Date().getFullYear().toString())}
            </p>
            <p className="font-paragraph text-sm text-primary-foreground/60 text-center">
              {t('developedBy', language)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
