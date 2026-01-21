import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { companyData } from '../data/companyData';
import { legalData } from '../data/legalData';
import Modal from './Modal';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const quickLinks = [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'İletişim', href: '#contact' },
  ];

  return (
    <>
      <footer className="bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Logo ve İletişim */}
              <div>
                <div className="mb-4 scale-90 origin-left">
                  <Logo />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaPhone className="w-3 h-3 text-blue-600" />
                    <a href={`tel:${companyData.contact.phone}`} className="hover:text-blue-600 transition-colors">
                      {companyData.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaEnvelope className="w-3 h-3 text-blue-600" />
                    <a href={`mailto:${companyData.contact.email}`} className="hover:text-blue-600 transition-colors text-xs break-all">
                      {companyData.contact.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <FaMapMarkerAlt className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                    <address className="not-italic text-xs leading-relaxed">
                      {companyData.contact.address}
                    </address>
                  </div>
                </div>
              </div>

              {/* Hızlı Linkler */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">Hızlı Linkler</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Yasal ve Developer Credit */}
              <div className="md:text-right">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Yasal</h3>
                <div className="space-y-2 mb-6">
                  <button 
                    onClick={() => setPrivacyModalOpen(true)}
                    className="block text-gray-600 hover:text-blue-600 transition-colors text-sm md:ml-auto"
                  >
                    Gizlilik Politikası
                  </button>
                  <button 
                    onClick={() => setTermsModalOpen(true)}
                    className="block text-gray-600 hover:text-blue-600 transition-colors text-sm md:ml-auto"
                  >
                    Kullanım Koşulları
                  </button>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Web Tasarım & Yazılım</p>
                  <a 
                    href="https://biyik.dev" 
                    target="_blank"
                    className="text-orange-600 font-bold hover:text-orange-500 transition-colors text-sm"
                    title="Web Tasarım ve Yazılım Hizmetleri"
                  >
                    BIYIK.DEV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 py-4 px-4 bg-gray-50">
            <p className="text-center text-xs text-gray-500">
              © {currentYear} {companyData.name} - Tüm hakları saklıdır
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        title={legalData.privacyPolicy.title}
        lastUpdated={legalData.privacyPolicy.lastUpdated}
      >
        <div className="space-y-6">
          {legalData.privacyPolicy.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </Modal>

      {/* Terms of Use Modal */}
      <Modal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
        title={legalData.termsOfUse.title}
        lastUpdated={legalData.termsOfUse.lastUpdated}
      >
        <div className="space-y-6">
          {legalData.termsOfUse.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Footer;
