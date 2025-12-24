import Link from 'next/link';

interface AppGatewayProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
  gradient: string;
  icon: string;
  link: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export default function AppGateway({
  id,
  title,
  description,
  features,
  stats,
  gradient,
  icon,
  link,
  colorScheme,
}: AppGatewayProps) {
  return (
    <section id={id} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`rounded-3xl overflow-hidden shadow-2xl ${gradient}`}>
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 ${colorScheme.primary} rounded-2xl flex items-center justify-center text-3xl`}>
                    {icon}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
                </div>
                <p className="text-xl text-white/90 max-w-3xl mt-4">{description}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`${colorScheme.accent} rounded-lg p-2 mt-1`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link
                href={link}
                className={`${colorScheme.secondary} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2`}
              >
                <span>Access {title}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

