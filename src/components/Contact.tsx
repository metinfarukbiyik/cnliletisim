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
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            İletişim
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                  className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Label */}
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {info.label}
                    </div>

                    {/* Value */}
                    <div className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors break-words w-full">
                      {info.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              7/24 Teknik Destek
            </h3>
            <p className="text-gray-600">
              Acil durumlar için hızlı müdahale ve çözüm odaklı hizmet anlayışımızla yanınızdayız
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
