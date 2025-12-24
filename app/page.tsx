import NavBar from '@/components/NavBar';
import AppGateway from '@/components/AppGateway';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Welcome to AFHhub
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
              Your Complete Platform for Adult Family Home Services
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Connect providers, manage properties, and streamline resident placement—all in one unified platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#provider"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Find Providers
              </a>
              <a
                href="#leasing"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Property Advisor
              </a>
              <a
                href="#placement"
                className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Placement Services
              </a>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">580+</div>
              <div className="text-gray-600">Verified Providers</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">45+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Free to Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* AFHprovider Gateway */}
      <AppGateway
        id="provider"
        title="AFH Provider Search"
        description="Find and connect with 580+ verified Adult Family Home providers in Washington State. Search by location, payment type, specialties, and more. Complete contact information and provider profiles at your fingertips."
        features={[
          'Advanced search with fuzzy matching',
          '580+ verified providers database',
          'Real-time search results',
          'Filter by location, payment type, and specialties',
          'Direct contact information',
          'Mobile-friendly click-to-call',
          'Provider experience and capacity data',
          'Comprehensive provider profiles',
          'Quick filter buttons',
          'Sort by multiple criteria'
        ]}
        stats={[
          { label: 'Total Providers', value: '580+' },
          { label: 'Cities Covered', value: '45+' },
          { label: 'With Contact Info', value: '520+' }
        ]}
        gradient="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700"
        icon="🔍"
        link="https://github.com/henrynkoh/AFHprovider"
        colorScheme={{
          primary: 'bg-blue-500',
          secondary: 'bg-blue-600 hover:bg-blue-700',
          accent: 'bg-blue-400'
        }}
      />

      {/* AFH-leasing-and-conversion Gateway */}
      <AppGateway
        id="leasing"
        title="AFH Property Advisor"
        description="Complete property analysis and conversion planning for Adult Family Home operations. Get detailed floor plan analysis, timeline estimates, budget planning, and marketing materials for your property. Perfect for property owners looking to lease or convert properties for AFH use."
        features={[
          'Top 3 scenario comparison',
          'Interactive floor plan analysis',
          'Room-by-room compliance assessment',
          'Timeline and budget planning',
          'Cost-sharing calculations',
          'Marketing materials for 9 platforms',
          'Provider search resources',
          'WABO-ready property analysis',
          'Capacity verification (3-4 beds)',
          'Complete documentation'
        ]}
        stats={[
          { label: 'Property Analysis', value: 'Complete' },
          { label: 'Marketing Templates', value: '9 Platforms' },
          { label: 'Conversion Scenarios', value: '3 Options' }
        ]}
        gradient="bg-gradient-to-br from-purple-500 via-purple-600 to-pink-700"
        icon="🏠"
        link="https://github.com/henrynkoh/AFH-leasing-and-conversion"
        colorScheme={{
          primary: 'bg-purple-500',
          secondary: 'bg-purple-600 hover:bg-purple-700',
          accent: 'bg-purple-400'
        }}
      />

      {/* AFHplacing Gateway */}
      <AppGateway
        id="placement"
        title="AFH Resident Placement Services"
        description="Systematic matchmaking platform for senior care placement. Intelligently match residents from hospitals and rehab facilities with appropriate AFH providers. Streamline the entire placement workflow with automated matching algorithms and comprehensive resident management."
        features={[
          'Intelligent matching algorithm',
          'Weighted scoring system (0-100%)',
          'Resident management system',
          'Priority-based matching',
          'Real-time availability tracking',
          'Role-based dashboards',
          'Provider directory integration',
          'Match reasoning and analysis',
          'Comprehensive intake forms',
          'Placement tracking and metrics'
        ]}
        stats={[
          { label: 'Match Accuracy', value: '85%+' },
          { label: 'Total Providers', value: '580+' },
          { label: 'Cities Covered', value: '45+' }
        ]}
        gradient="bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-700"
        icon="🏥"
        link="https://github.com/henrynkoh/AFHplacing"
        colorScheme={{
          primary: 'bg-indigo-500',
          secondary: 'bg-indigo-600 hover:bg-indigo-700',
          accent: 'bg-indigo-400'
        }}
      />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About AFHhub
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A unified platform bringing together all your Adult Family Home needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To bridge the gap between healthcare facilities, property owners, and AFH providers by providing
                comprehensive tools and services that streamline operations, improve efficiency, and ensure optimal
                matches for residents in need of care.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Choose AFHhub?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>All-in-one platform for all AFH needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Completely free and open source</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Verified data from official sources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Modern, intuitive user interface</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 text-white/90">
              Choose any of our three powerful applications to begin
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#provider"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Provider Search →
              </a>
              <a
                href="#leasing"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Property Advisor →
              </a>
              <a
                href="#placement"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Placement Services →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

