import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold">AFHhub</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your complete platform for Adult Family Home services, property management, and resident placement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#provider" className="text-gray-400 hover:text-white transition-colors">
                  Provider Search
                </Link>
              </li>
              <li>
                <Link href="#leasing" className="text-gray-400 hover:text-white transition-colors">
                  Property Advisor
                </Link>
              </li>
              <li>
                <Link href="#placement" className="text-gray-400 hover:text-white transition-colors">
                  Placement Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/henrynkoh/AFHprovider" className="text-gray-400 hover:text-white transition-colors">
                  AFHprovider GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/henrynkoh/AFH-leasing-and-conversion" className="text-gray-400 hover:text-white transition-colors">
                  AFH-leasing-and-conversion GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/henrynkoh/AFHplacing" className="text-gray-400 hover:text-white transition-colors">
                  AFHplacing GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Support: support@afhhub.com</li>
              <li>Washington State</li>
              <li>Adult Family Home Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AFHhub. All rights reserved. Made with ❤️ for the Senior Care Community.</p>
        </div>
      </div>
    </footer>
  );
}

