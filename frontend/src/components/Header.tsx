import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md border-b border-surface sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-secondary">Bright Global</h1>

        {/* Desktop Menu */}
       <nav className="flex flex-row gap-6 text-base bg-yellow-100 p-4">
  <Link to="/" className="hover:text-primary">Home</Link>
  <Link to="/about" className="hover:text-primary">About</Link>
  <Link to="/services" className="hover:text-primary">Services</Link>
  <Link to="/tour" className="hover:text-primary">Tour</Link>
  <Link to="/contact" className="hover:text-primary">Contact</Link>
</nav>


        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-primary">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <nav className="flex flex-col sm:hidden bg-white px-4 pb-4 gap-4 text-base border-t border-gray-100">
          <Link to="/" className="hover:text-primary" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="hover:text-primary" onClick={toggleMenu}>About</Link>
          <Link to="/services" className="hover:text-primary" onClick={toggleMenu}>Services</Link>
          <Link to="/tour" className="hover:text-primary" onClick={toggleMenu}>Tour</Link>
          <Link to="/contact" className="hover:text-primary" onClick={toggleMenu}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
