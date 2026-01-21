import { FaBroadcastTower, FaWifi, FaNetworkWired, FaSignal } from 'react-icons/fa';
import { companyData } from '../data/companyData';

const Hero = () => {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-white pt-20 overflow-hidden">
        {/* Animated Tech Background */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-tech-grid-blue opacity-30"></div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse-slower"></div>
          
          {/* Signal waves */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-64 h-64 border-2 border-blue-400/20 rounded-full animate-signal-wave"></div>
            <div className="absolute w-64 h-64 border-2 border-blue-400/20 rounded-full animate-signal-wave-delay"></div>
          </div>
        </div>

        <div className="container-custom px-6 sm:px-8 lg:px-4 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                  <div className="relative w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span>Telekomünikasyon Altyapı Çözümleri</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  CNL İletişim
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {companyData.description}
                </p>
              </div>

              {/* Tech Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: FaBroadcastTower, number: '500+', label: 'Kurulum' },
                  { icon: FaNetworkWired, number: '10+', label: 'Yıl Tecrübe' },
                  { icon: FaSignal, number: '%100', label: 'Başarı' }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index} 
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300"></div>
                      <div className="relative bg-white p-5 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mb-3">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">{item.number}</div>
                        <div className="text-xs text-gray-600 font-medium">{item.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#services"
                  className="relative group bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-1"
                >
                  Hizmetlerimizi Keşfedin
                </a>
                <a
                  href="#contact"
                  className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 text-center shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  Bize Ulaşın
                </a>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Central Tower */}
                <div className="relative w-96 h-96 flex items-center justify-center">
                  {/* Outer rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-300/40 animate-spin-slow"></div>
                  <div className="absolute inset-12 rounded-full border-2 border-blue-400/40 animate-spin-slower"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
                  
                  {/* Center icon */}
                  <div className="relative w-56 h-56 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 hover:scale-105 transition-transform duration-300">
                    <FaBroadcastTower className="w-32 h-32 text-white" />
                  </div>
                  
                  {/* Signal indicators */}
                  <div className="absolute top-0 right-1/4 animate-float">
                    <div className="bg-blue-500 p-4 rounded-2xl shadow-xl border-2 border-blue-400/50">
                      <FaWifi className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-0 animate-float-delay">
                    <div className="bg-blue-600 p-4 rounded-2xl shadow-xl border-2 border-blue-400/50">
                      <FaNetworkWired className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1/3 -right-8 animate-float-delay-2">
                    <div className="bg-blue-500 p-4 rounded-2xl shadow-xl border-2 border-blue-400/50">
                      <FaSignal className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-blue-600">500+</div>
                  <div className="text-sm text-gray-700 font-semibold mt-1">Kurulum Projesi</div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-blue-600">%100</div>
                  <div className="text-sm text-gray-700 font-semibold mt-1">Başarı Oranı</div>
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
                <div className="flex items-center justify-center min-w-[200px] h-28 bg-white rounded-xl shadow-sm border border-gray-200 px-8 py-6">
                  <img 
                    src="/ttlogo.png" 
                    alt="TT" 
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
