import { companyData } from '../data/companyData';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom px-6 sm:px-8 lg:px-4">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-3">
            Hizmetlerimiz
          </h2>
          <p className="text-slate-600 max-w-xl">
            Telekomünikasyon altyapısı için eksiksiz hizmet yelpazesi
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.services.slice(0, 2).map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  {/* Icon - Minimal */}
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1 h-1 bg-slate-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        {feature}
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
                  className="group bg-white p-8 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  {/* Icon - Minimal */}
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1 h-1 bg-slate-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Tüm hizmetlerimizde <span className="font-medium text-slate-700">7/24 teknik destek</span> sunuyoruz
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
