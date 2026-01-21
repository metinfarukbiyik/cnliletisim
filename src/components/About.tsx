import { FaBroadcastTower, FaUsers, FaAward } from 'react-icons/fa';
import { companyData } from '../data/companyData';

const About = () => {
  const stats = [
    { icon: FaBroadcastTower, label: 'Başarılı Kurulum', value: '500+' },
    { icon: FaUsers, label: 'Mutlu Müşteri', value: '100+' },
    { icon: FaAward, label: 'Yıllık Tecrübe', value: '10+' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/teknoloji.jpg" 
                alt="CNL İletişim - Teknolojik Altyapı" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center"
                    >
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Hakkımızda
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Güvenilir ve Deneyimli Ekip
            </h2>
            
            <div className="space-y-4">
              {companyData.about.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: '👥', text: 'Deneyimli Ekip' },
                { icon: '🛡️', text: '7/24 Destek' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
