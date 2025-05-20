import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm text-gray-600 mb-2 md:mb-0">
          © 2025 Bright Global. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-gray-600">
          <a
            href="mailto:info@brightglobal.co.in"
            className="hover:text-primary break-all"
          >
            📧 info@brightglobal.co.in
          </a>
          <a
            href="https://brightglobal.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary break-all"
          >
            🌐 brightglobal.co.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
