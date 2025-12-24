'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 shadow-2xl`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8 pt-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">AFHhub</h1>
              <p className="text-sm text-white/80">Complete AFH Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <Link
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
            >
              <span className="text-xl">🏠</span>
              <span className="font-medium">Home</span>
            </Link>

            <Link
              href="#provider"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
            >
              <span className="text-xl">🔍</span>
              <span className="font-medium">Provider Search</span>
            </Link>

            <Link
              href="#leasing"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
            >
              <span className="text-xl">🏠</span>
              <span className="font-medium">Property Advisor</span>
            </Link>

            <Link
              href="#placement"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
            >
              <span className="text-xl">🏥</span>
              <span className="font-medium">Placement Services</span>
            </Link>

            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
            >
              <span className="text-xl">✨</span>
              <span className="font-medium">Features</span>
            </Link>

            <Link
              href="#stats"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
            >
              <span className="text-xl">📊</span>
              <span className="font-medium">Statistics</span>
            </Link>

            <Link
              href="#case-studies"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
            >
              <span className="text-xl">📚</span>
              <span className="font-medium">Case Studies</span>
            </Link>

            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
            >
              <span className="text-xl">ℹ️</span>
              <span className="font-medium">About</span>
            </Link>
          </nav>

          {/* Quick Links */}
          <div className="pt-6 border-t border-white/20">
            <p className="text-sm text-white/80 mb-3 font-medium">Quick Links</p>
            <div className="space-y-2">
              <a
                href="https://github.com/henrynkoh/AFHprovider"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-white/90 hover:text-white transition-colors"
              >
                <span>🔗</span>
                <span>Provider Search</span>
              </a>
              <a
                href="https://github.com/henrynkoh/AFH-leasing-and-conversion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-white/90 hover:text-white transition-colors"
              >
                <span>🔗</span>
                <span>Property Advisor</span>
              </a>
              <a
                href="https://github.com/henrynkoh/AFHplacing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-white/90 hover:text-white transition-colors"
              >
                <span>🔗</span>
                <span>Placement Services</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-white/20 mt-auto">
            <p className="text-xs text-white/60">
              Made with ❤️ for the Senior Care Community
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

