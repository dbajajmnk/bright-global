import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-surface py-6 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        {/* Left Side */}
        <p className="text-sm text-textSecondary">
          © 2022 TechLambda. All rights reserved.
        </p>

        {/* Center - Links */}
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

        {/* Right Side - Social Media */}
        <div className="flex items-center gap-4 text-primary text-lg">
          <a
            href="https://whatsapp.com/channel/0029VarZn9aGk1FnlCttz11q"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.youtube.com/@techlambda360"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/company/105116331/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61566939595712"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/techlambdaservices/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
