import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface py-6 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm text-textSecondary mb-2 md:mb-0">
          © 2025 TechLambda. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-textSecondary">
          <a
            href="mailto:hr@techlambda.com"
            className="hover:text-primary transition-colors break-all"
          >
            Email at: hr@techlambda.com
          </a>
          <a
            href="https://techlambda.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors break-all"
          >
            Website: www.techlambda.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
