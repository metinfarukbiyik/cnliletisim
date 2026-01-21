import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { companyData } from '../data/companyData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hizmetler: [
      { name: 'Baz İstasyonu Kurulumu', href: '#services' },
      { name: 'Survey', href: '#services' },
      { name: 'GSM Network', href: '#services' },
      { name: 'Transmisyon', href: '#services' },
    ],
    şirket: [
      { name: 'Hakkımızda', href: '#about' },
      { name: 'Hizmetlerimiz', href: '#services' },
      { name: 'İletişim', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-t border-slate-200">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Logo ve Açıklama - 4 columns */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30"></div>
                    <div className="relative z-10 text-white font-black text-2xl">CNL</div>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xl font-bold text-gray-900">CNL İletişim</span>
                    <span className="text-sm text-gray-600 font-medium">Elektrik ve Elektronik</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Baz istasyonu kurulum ve revizyon alanında profesyonel hizmetler sunuyoruz. 
                Telekomünikasyon altyapısında güvenilir çözüm ortağınız.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center ${social.color} hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Hizmetler - 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="text-gray-900 font-bold text-base mb-6">Hizmetlerimiz</h3>
              <ul className="space-y-3">
                {footerLinks.hizmetler.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm inline-flex items-center group"
                    >
                      <span className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-200">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Şirket - 2 columns */}
            <div className="lg:col-span-2">
              <h3 className="text-gray-900 font-bold text-base mb-6">Şirket</h3>
              <ul className="space-y-3">
                {footerLinks.şirket.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm inline-flex items-center group"
                    >
                      <span className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-200">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* İletişim - 4 columns */}
            <div className="lg:col-span-4">
              <h3 className="text-gray-900 font-bold text-base mb-6">İletişim Bilgileri</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <FaPhone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-medium mb-1">Telefon</div>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="text-gray-900 hover:text-blue-600 transition-colors text-sm font-semibold"
                    >
                      {companyData.contact.phone}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <FaEnvelope className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-medium mb-1">E-posta</div>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-gray-900 hover:text-blue-600 transition-colors text-sm font-semibold break-all"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <FaMapMarkerAlt className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-medium mb-1">Adres</div>
                    <address className="text-gray-900 text-sm font-medium not-italic leading-relaxed">
                      {companyData.contact.address}
                    </address>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 py-6 px-4 bg-white/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm">
              <p className="text-gray-600">
                © {currentYear} <span className="text-blue-600 font-semibold">{companyData.name}</span>
              </p>
              <span className="hidden md:inline text-gray-300">•</span>
              <p className="text-gray-500 text-xs">Tüm hakları saklıdır</p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Gizlilik Politikası
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Kullanım Koşulları
              </a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="text-center mt-6 pt-6 border-t border-slate-200/50">
            <p className="text-gray-500 text-xs">
              Web tasarım ve yazılım:{' '}
              <a 
                href="https://biyik.dev" 
                target="_blank"
                className="text-orange-600 font-semibold hover:text-orange-500 transition-colors"
                title="Web Tasarım ve Yazılım Hizmetleri"
              >
                BIYIK.DEV
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
