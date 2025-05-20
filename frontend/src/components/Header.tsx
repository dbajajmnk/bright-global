import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Bright Global</h1>
        <nav className="hidden sm:flex gap-6 text-base relative">
          <Link to="/" className="hover:text-primary">Home</Link>

          {/* About with submenu */}
          <div
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
            className="relative"
          >
            <span className="cursor-pointer hover:text-primary">About</span>
            {aboutOpen && (
              <div className="absolute top-full mt-2 bg-white shadow rounded p-2 space-y-2 z-10 w-48">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Overview</Link>
                <Link to="/vision" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Vision & Mission</Link>
                <Link to="/team" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Our Team</Link>
              </div>
            )}
          </div>

          {/* Services with submenu */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="cursor-pointer hover:text-primary">Services</span>
            {servicesOpen && (
              <div className="absolute top-full mt-2 bg-white shadow rounded p-2 space-y-2 z-10 w-48">
                <Link to="/nursing-course" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Nursing Course</Link>
                <Link to="/placement" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Placement</Link>
                <Link to="/visa" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Visa Assistance</Link>
              </div>
            )}
          </div>

          <Link to="/tour" className="hover:text-primary">Tour</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
