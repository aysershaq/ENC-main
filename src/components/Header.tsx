import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Image } from '@/components/ui/image';
import { useLanguageStore } from '@/stores/languageStore';
import { t } from '@/lib/translations';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguageStore();

  const navigation = [
    { key: 'home', href: '/' },
    { key: 'tetratech', href: '/tetra' },
    { key: 'about', href: '/about' },
    { key: 'devices', href: '/devices' },
    { key: 'jobs', href: '/jobs' },
    { key: 'contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-foreground/10">
      <nav className={`mx-auto max-w-[120rem] px-6 lg:px-12 py-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Image
              src="https://www.enc.ly/wp-content/uploads/2019/03/LOGONEW12.png"
              alt="Ettisalat Nawiea Logo"
              width={120}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-paragraph text-base transition-colors ${
                  isActive(item.href)
                    ? 'text-secondary'
                    : 'text-foreground hover:text-secondary'
                }`}
              >
                {t(item.key as any, language)}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/20 hover:border-secondary hover:text-secondary transition-colors font-paragraph text-sm"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-foreground/20 hover:border-secondary hover:text-secondary transition-colors font-paragraph text-xs"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-foreground/10 pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-paragraph text-base transition-colors ${
                    isActive(item.href)
                      ? 'text-secondary'
                      : 'text-foreground hover:text-secondary'
                  }`}
                >
                  {t(item.key as any, language)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
