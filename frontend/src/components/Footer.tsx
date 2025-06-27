import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-gray-300 pt-12 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
        
        {/* Resources */}
    

        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-orange-500 inline-block">Resources</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-orange-400">FAQs</Link></li>
            <li><Link to="/blog" className="hover:text-orange-400">Blog</Link></li>
            <li><Link to="/referral" className="hover:text-orange-400">Refer & Earn</Link></li>
            <li><Link to="/pricing" className="hover:text-orange-400">Pricing</Link></li>
          </ul>
        </div>

        {/* For Experts */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-orange-500 inline-block">For Experts</h4>
          <ul className="space-y-2">
            <li><Link to="/expert-apply" className="hover:text-orange-400">Apply as Expert</Link></li>
            <li><Link to="/how-it-works" className="hover:text-orange-400">How It Works</Link></li>
            <li><Link to="/ranking" className="hover:text-orange-400">Expert Rankings</Link></li>
<li><Link to="/share-story" className="hover:text-orange-400">Share a Story</Link></li>
          </ul>
        </div>

        {/* Help & Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 border-b border-orange-500 inline-block">Help & Feedback</h4>
          <ul className="space-y-2 mb-4">
            <li><Link to="/contact" className="hover:text-orange-400">Contact Us</Link></li>
            <li><Link to="/feedback" className="hover:text-orange-400">Feedback</Link></li>
            <li><Link to="/testimonials" className="hover:text-orange-400">Testimonials</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-orange-400">Terms of Service</Link></li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl text-orange-400">
            <a href="https://whatsapp.com/channel/0029VarZn9aGk1FnlCttz11q" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:scale-110 transition-transform">
              <FaWhatsapp />
            </a>
            <a href="https://www.youtube.com/@techlambda360" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:scale-110 transition-transform">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/company/105116331/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61566939595712" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/techlambdaservices/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-2">
          <a href="mailto:hr@techlambda.com" className="hover:text-orange-400">hr@techlambda.com</a>
          <span>|</span>
          <a href="https://techlambda.com" className="hover:text-orange-400" target="_blank" rel="noreferrer">www.techlambda.com</a>
        </div>
        <p>© {new Date().getFullYear()} TechLambda Services Pvt. Ltd. | Smart Tech. Clear Purpose. Bold Results.</p>
      </div>
    </footer>
  );
};

export default Footer;
