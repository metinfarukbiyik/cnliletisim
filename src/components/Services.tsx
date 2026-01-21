import { companyData } from '../data/companyData';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom px-6 sm:px-8 lg:px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Hizmetlerimiz
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Profesyonel Çözümlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Telekomünikasyon altyapısı için eksiksiz hizmet yelpazesi
          </p>
        </div>

        {/* Service Cards - 2x2 Grid Layout - Minimal & Elegant */}
        <div className="max-w-6xl mx-auto space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.services.slice(0, 2).map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon - Minimal */}
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features - Clean List */}
                  <ul className="space-y-2.5">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.services.slice(2, 4).map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon - Minimal */}
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features - Clean List */}
                  <ul className="space-y-2.5">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Tüm hizmetlerimizde <span className="font-semibold text-blue-600">7/24 teknik destek</span> sunuyoruz
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
