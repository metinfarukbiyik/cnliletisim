import { FaBroadcastTower } from 'react-icons/fa';
import { companyData } from '../data/companyData';

const Hero = () => {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-white pt-20 overflow-hidden">
        {/* Minimal background decoration */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container-custom px-4 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Profesyonel Baz İstasyonu Çözümleri</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  CNL İletişim
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {companyData.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: '🏆', text: '10+ Yıllık Tecrübe' },
                  { icon: '📡', text: '500+ Başarılı Kurulum' },
                  { icon: '🛡️', text: '7/24 Teknik Destek' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#services"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-center shadow-lg shadow-blue-500/20"
                >
                  Hizmetlerimizi Keşfedin
                </a>
                <a
                  href="#contact"
                  className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 text-center"
                >
                  Bize Ulaşın
                </a>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="relative w-96 h-96 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                  <FaBroadcastTower className="w-48 h-48 text-white" />
                </div>
                
                {/* Floating cards */}
                <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-3xl font-bold text-blue-500">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Kurulum</div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-3xl font-bold text-green-500">%100</div>
                  <div className="text-sm text-gray-600 font-medium">Başarı</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logos - Scrolling Section */}
      <section className="py-12 bg-slate-50 border-y border-gray-200 overflow-hidden">
        {/* Fade overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
        
        {/* Scrolling logos */}
        <div className="relative">
          <div className="flex animate-scroll-logos">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-8">
                <div className="flex items-center justify-center min-w-[200px] h-28 bg-white rounded-xl shadow-sm border border-gray-200 px-8 py-6">
                  <img 
                    src="/turkcell.png" 
                    alt="Turkcell" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px] h-28 bg-white rounded-xl shadow-sm border border-gray-200 px-8 py-6">
                  <img 
                    src="/vodafone.png" 
                    alt="Vodafone" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px] h-28 bg-white rounded-xl shadow-sm border border-gray-200 px-8 py-6">
                  <img 
                    src="/karellogo.png" 
                    alt="Karel" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px] h-28 bg-white rounded-xl shadow-sm border border-gray-200 px-8 py-6">
                  <img 
                    src="/ntmlogo.png" 
                    alt="NTM" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center min-w-[200px] h-28 bg-white rounded-xl shadow-sm border border-gray-200 px-8 py-6">
                  <img 
                    src="/ulak.svg" 
                    alt="Ulak" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom text */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 font-medium">
            Referanslarımız
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
