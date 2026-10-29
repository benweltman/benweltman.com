import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../theme/ThemeToggle';
import Logo from '../common/Logo';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f9f9f9]/90 dark:bg-[#161c1a]/90 backdrop-blur-md border-b border-slate-200 dark:border-[#2a322c] duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group focus-within:text-primary">
              <div className="h-8 w-8 text-slate-900 dark:text-white transition-all duration-300 group-hover:scale-105 group-hover:text-primary">
                <Logo />
              </div>
              <span className="text-xl tracking-tight text-slate-900 dark:text-white hidden sm:block duration-300 group-hover:text-primary">
                Ben Weltman
              </span>
            </Link>
          </div>

          {/* Navigation and Tools */}
          <nav className="flex items-center gap-1 sm:gap-6" aria-label="Main Navigation">
            <ul className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-xl tracking-tight hover:text-primary focus:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 sm:gap-4 pl-4 border-l border-slate-200 dark:border-[#2a322c]">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-primary focus:text-primary cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
              <ThemeToggle />
            </div>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-white/95 dark:bg-[#1a1f1c]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#2a322c] shadow-lg z-40 transition-all duration-300">
            <ul className="flex flex-col p-4 gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary focus:text-primary block w-full"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
