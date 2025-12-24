'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AFHhub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#provider" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Provider Search
            </Link>
            <Link href="#leasing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Property Advisor
            </Link>
            <Link href="#placement" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Placement Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#provider" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              Provider Search
            </Link>
            <Link href="#leasing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              Property Advisor
            </Link>
            <Link href="#placement" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              Placement Services
            </Link>
            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

