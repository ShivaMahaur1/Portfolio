import React, { useState } from 'react';

const navLinks = ['Home', 'About', 'Skills', 'Projects',  'Contact'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50  shadow-md  py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-white bg-clip-text text-transparent text-2xl font-bold">
          Portfolio
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-300 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-300 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-300 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex space-x-10">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-gray-100 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4 bg-black rounded-lg p-6 shadow-lg">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;