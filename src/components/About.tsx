import { FaBroadcastTower, FaUsers, FaAward } from 'react-icons/fa';
import { companyData } from '../data/companyData';

const About = () => {
  const stats = [
    { icon: FaBroadcastTower, label: 'Başarılı Kurulum', value: '500+' },
    { icon: FaUsers, label: 'Mutlu Müşteri', value: '100+' },
    { icon: FaAward, label: 'Yıllık Tecrübe', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50">
      <div className="container-custom px-6 sm:px-8 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/cnl3.jpg" 
                alt="CNL İletişim - Güvenilir ve Deneyimli Ekip" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm text-center"
                    >
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <IconComponent className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="text-xl font-semibold text-slate-800">{stat.value}</div>
                      <div className="text-xs text-slate-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-800">
              Güvenilir ve Deneyimli Ekip
            </h2>
            
            <div className="space-y-4">
              {companyData.about.content.map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed">
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
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-100">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-slate-700 font-medium text-sm">{feature.text}</span>
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
