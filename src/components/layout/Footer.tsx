import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f9f9f9]/60 dark:bg-[#161c1a]/60 backdrop-blur-md border-t border-slate-200 dark:border-[#2a322c] text-stone-700 dark:text-[#a3aaa5] text-sm z-10">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Ben Weltman. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/portfolio" className="text-sm dark:text-[#a3aaa5] hover:text-primary">
              Portfolio
            </Link>
            <Link to="/about" className="text-sm dark:text-[#a3aaa5] hover:text-primary">
              About
            </Link>
            <a href="mailto:ben@benweltman.com" className="text-sm dark:text-[#a3aaa5] hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
