import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { companyData } from '../data/companyData';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Telefon',
      value: companyData.contact.phone,
      href: `tel:${companyData.contact.phone}`,
    },
    {
      icon: FaEnvelope,
      label: 'E-posta',
      value: companyData.contact.email,
      href: `mailto:${companyData.contact.email}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Adres',
      value: companyData.contact.address,
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-custom px-6 sm:px-8 lg:px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-3">
            İletişim
          </h2>
          <p className="text-slate-600 max-w-xl">
            Projeleriniz için profesyonel çözümler sunmaya hazırız
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="group bg-slate-50/50 p-8 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-slate-600" />
                    </div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {info.label}
                    </div>

                    {/* Value */}
                    <div className="text-base font-medium text-slate-800 break-words w-full">
                      {info.value}
                    </div>

                  </div>
                </a>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center p-8 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              7/24 Teknik Destek
            </h3>
            <p className="text-slate-600 text-sm">
              Acil durumlar için hızlı müdahale ve çözüm odaklı hizmet anlayışımızla yanınızdayız
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
