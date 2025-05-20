import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Bright Global</h1>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex gap-6 text-base relative">
          <Link to="/" className={isActive('/') ? 'text-primary font-semibold' : 'hover:text-primary'}>Home</Link>

          {/* About Dropdown */}
          <div
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
            className="relative"
          >
            <span className="cursor-pointer hover:text-primary">About</span>
            {aboutOpen && (
              <div className="absolute top-full mt-2 bg-white shadow rounded p-2 space-y-2 z-10 w-48 transition-all duration-300 ease-in-out opacity-100">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Overview</Link>
                <Link to="/vision" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Vision & Mission</Link>
                <Link to="/team" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Our Team</Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="cursor-pointer hover:text-primary">Services</span>
            {servicesOpen && (
              <div className="absolute top-full mt-2 bg-white shadow rounded p-2 space-y-2 z-10 w-48 transition-all duration-300 ease-in-out opacity-100">
                <Link to="/nursing-course" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Nursing Course</Link>
                <Link to="/placement" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Placement</Link>
                <Link to="/visa" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">Visa Assistance</Link>
              </div>
            )}
          </div>

          <Link to="/tour" className={isActive('/tour') ? 'text-primary font-semibold' : 'hover:text-primary'}>Tour</Link>
          <Link to="/contact" className={isActive('/contact') ? 'text-primary font-semibold' : 'hover:text-primary'}>Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="sm:hidden text-2xl text-primary transition-transform duration-300">
          {mobileOpen ? <FaTimes className="transform rotate-90" /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-md z-40 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold text-primary">Menu</h2>
          <button onClick={() => setMobileOpen(false)} className="text-xl text-primary">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link to="/" onClick={() => setMobileOpen(false)} className={isActive('/') ? 'text-primary font-semibold' : ''}>Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/vision" onClick={() => setMobileOpen(false)}>Vision & Mission</Link>
          <Link to="/team" onClick={() => setMobileOpen(false)}>Our Team</Link>
          <Link to="/nursing-course" onClick={() => setMobileOpen(false)}>Nursing Course</Link>
          <Link to="/placement" onClick={() => setMobileOpen(false)}>Placement</Link>
          <Link to="/visa" onClick={() => setMobileOpen(false)}>Visa Assistance</Link>
          <Link to="/tour" onClick={() => setMobileOpen(false)}>Tour</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        </nav>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
