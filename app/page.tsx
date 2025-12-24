'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['hero', 'provider', 'leasing', 'placement', 'features', 'stats', 'about'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Sidebar />

      {/* Main Content with Sidebar Offset */}
      <main className="md:ml-80">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
                  ✨ Completely Free Platform
                </span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-slide-up">
              Welcome to AFHhub
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light animate-slide-up animation-delay-200">
              Your Complete Adult Family Home Platform
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 animate-slide-up animation-delay-400">
              Connect providers, manage properties, and streamline resident placement—all in one unified, powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up animation-delay-600">
              <a
                href="#provider"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Find Providers</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="#leasing"
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Property Advisor
              </a>
              <a
                href="#placement"
                className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Placement Services
              </a>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in animation-delay-800">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                <div className="text-5xl font-bold text-blue-600 mb-2">580+</div>
                <div className="text-gray-600 font-medium">Verified Providers</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                <div className="text-5xl font-bold text-purple-600 mb-2">45+</div>
                <div className="text-gray-600 font-medium">Cities Covered</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                <div className="text-5xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Free to Use</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Provider Search Section */}
        <section id="provider" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-6xl">🔍</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AFH Provider Search
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Find and connect with 580+ verified Adult Family Home providers across Washington State
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Powerful Search Features</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Advanced search with fuzzy matching</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Real-time results as you type</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Filter by location, payment type, specialties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Direct contact information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span>Mobile click-to-call functionality</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                  <div className="text-6xl font-bold mb-2">580+</div>
                  <div className="text-xl mb-4">Verified Providers</div>
                  <div className="text-sm opacity-90">From Adult Family Home Council of WA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Advisor Section */}
        <section id="leasing" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-6xl">🏠</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AFH Property Advisor
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Complete property analysis and conversion planning for AFH operations
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">30-90</div>
                  <div className="text-sm opacity-90">Days (Direct Lease)</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">90-120</div>
                  <div className="text-sm opacity-90">Days (Minimal Conversion) ⭐</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">120-180</div>
                  <div className="text-sm opacity-90">Days (Full Conversion)</div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Key Features</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">✓</span>
                      <span>Interactive floor plan analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">✓</span>
                      <span>Top 3 scenario comparison</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">✓</span>
                      <span>Timeline and budget planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 text-xl">✓</span>
                      <span>Marketing materials for 9 platforms</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
                  <div className="text-4xl font-bold text-purple-600 mb-2">9</div>
                  <div className="text-xl text-gray-700 mb-4">Marketing Platforms</div>
                  <div className="text-sm text-gray-600">Facebook, Instagram, Threads, Blogger, Naver, Tistory, WordPress, Newsletter, Email</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placement Services Section */}
        <section id="placement" className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-6xl">🏥</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                AFH Resident Placement Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Intelligent matchmaking platform for senior care placement
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-8 text-white order-2 md:order-1">
                  <div className="text-6xl font-bold mb-2">85%+</div>
                  <div className="text-xl mb-4">Match Accuracy</div>
                  <div className="text-sm opacity-90">Intelligent weighted scoring algorithm</div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Matching Algorithm</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">Care Level Compatibility</span>
                        <span className="font-semibold text-indigo-600">30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">Payment Type</span>
                        <span className="font-semibold text-indigo-600">25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">Availability</span>
                        <span className="font-semibold text-indigo-600">15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Platform Features
              </h2>
              <p className="text-xl text-gray-600">Everything you need in one place</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🎨', title: 'Modern UI', desc: 'Beautiful gradients and smooth animations' },
                { icon: '📱', title: 'Responsive', desc: 'Works perfectly on all devices' },
                { icon: '⚡', title: 'Fast', desc: 'Optimized for speed and performance' },
                { icon: '🔒', title: 'Secure', desc: 'Industry-standard security practices' },
                { icon: '📚', title: 'Documented', desc: 'Comprehensive guides and tutorials' },
                { icon: '🆓', title: 'Free', desc: '100% free, no registration required' },
              ].map((feature, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section id="stats" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Platform Statistics</h2>
              <p className="text-xl text-gray-300">Real numbers, real impact</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: '580+', label: 'Verified Providers', color: 'from-blue-500 to-cyan-500' },
                { value: '45+', label: 'Cities Covered', color: 'from-purple-500 to-pink-500' },
                { value: '520+', label: 'With Contact Info', color: 'from-indigo-500 to-blue-500' },
                { value: '85%+', label: 'Match Accuracy', color: 'from-green-500 to-emerald-500' },
              ].map((stat, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-center transform hover:scale-105 transition-all`}>
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About AFHhub
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A unified platform bringing together all your Adult Family Home needs
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To bridge the gap between healthcare facilities, property owners, and AFH providers by providing comprehensive tools and services that streamline operations, improve efficiency, and ensure optimal matches for residents in need of care.
                  </p>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-8">Why Choose AFHhub?</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">✓</span>
                      <span>All-in-one platform for all AFH needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">✓</span>
                      <span>Completely free and open source</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">✓</span>
                      <span>Verified data from official sources</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">✓</span>
                      <span>Modern, intuitive user interface</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6 opacity-90">Choose any of our three powerful applications to begin</p>
                  <div className="space-y-3">
                    <a href="#provider" className="block bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all text-center">
                      Provider Search →
                    </a>
                    <a href="#leasing" className="block bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all text-center">
                      Property Advisor →
                    </a>
                    <a href="#placement" className="block bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all text-center">
                      Placement Services →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
