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
      <footer style={{ background: 'var(--panel)', borderTop: '1px solid var(--line)' }}>
        <div className="container-custom">
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Logo ve İletişim */}
              <div>
                <div className="mb-5">
                  <Logo />
                </div>
                <div className="space-y-2.5 text-sm" style={{ color: 'var(--ink-muted)' }}>
                  <div className="flex items-center gap-2">
                    <FaPhone className="w-3 h-3" style={{ color: 'var(--primary)' }} />
                    <a href={`tel:${companyData.contact.phone}`} className="hover:underline underline-offset-4">
                      {companyData.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="w-3 h-3" style={{ color: 'var(--primary)' }} />
                    <a href={`mailto:${companyData.contact.email}`} className="hover:underline underline-offset-4 text-xs break-all">
                      {companyData.contact.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                    <address className="not-italic text-xs leading-relaxed">
                      {companyData.contact.address}
                    </address>
                  </div>
                </div>
              </div>

              {/* Hızlı Linkler */}
              <div>
                <h3 className="mono text-[11.5px] font-extrabold tracking-[0.14em] uppercase mb-4" style={{ color: 'var(--ink)' }}>Hızlı Linkler</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="mono text-[13px] font-semibold tracking-[0.03em] hover:underline underline-offset-4"
                        style={{ color: 'var(--ink-body)' }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Yasal ve Developer Credit */}
              <div className="md:text-right">
                <h3 className="mono text-[11.5px] font-extrabold tracking-[0.14em] uppercase mb-4" style={{ color: 'var(--ink)' }}>Yasal</h3>
                <div className="space-y-2 mb-6">
                  <button 
                    onClick={() => setPrivacyModalOpen(true)}
                    className="block mono text-[13px] font-semibold tracking-[0.03em] hover:underline underline-offset-4 md:ml-auto"
                    style={{ color: 'var(--ink-body)' }}
                  >
                    Gizlilik Politikası
                  </button>
                  <button 
                    onClick={() => setTermsModalOpen(true)}
                    className="block mono text-[13px] font-semibold tracking-[0.03em] hover:underline underline-offset-4 md:ml-auto"
                    style={{ color: 'var(--ink-body)' }}
                  >
                    Kullanım Koşulları
                  </button>
                </div>
                <div className="pt-4" style={{ borderTop: '1px solid var(--line)' }}>
                  <p className="mono text-[11px] tracking-[0.08em] mb-1" style={{ color: 'var(--ink-faint)' }}>Web Tasarım & Yazılım</p>
                  <a 
                    href="https://biyik.dev" 
                    target="_blank"
                    rel="noopener"
                    className="mono font-extrabold tracking-[0.08em] text-sm transition-opacity hover:opacity-80"
                    style={{ color: '#ea580c' }}
                    title="Web Tasarım ve Yazılım Hizmetleri"
                  >
                    BIYIK.DEV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-5 flex flex-col sm:flex-row gap-2 items-center justify-between" style={{ borderTop: '1px solid var(--line)' }}>
            <p className="mono text-center text-[11px] tracking-[0.04em]" style={{ color: 'var(--ink-faint)' }}>
              © {currentYear} {companyData.name} — Tüm hakları saklıdır
            </p>
            <a href="#home" className="mono text-[11px] font-bold tracking-[0.12em] uppercase hover:underline underline-offset-4" style={{ color: 'var(--ink-muted)' }}>
              ↑ Başa dön
            </a>
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
              <h3 className="text-[15px] font-extrabold mb-2">{section.title}</h3>
              <p className="leading-relaxed text-[15px]" style={{ color: 'var(--ink-body)' }}>{section.content}</p>
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
              <h3 className="text-[15px] font-extrabold mb-2">{section.title}</h3>
              <p className="leading-relaxed text-[15px]" style={{ color: 'var(--ink-body)' }}>{section.content}</p>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Footer;
