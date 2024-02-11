import React, { useState } from 'react';

const NavBar = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-10 left-10 right-10 z-50 flex items-center justify-between p-4 bg-transparent md:p-8">
      <div className="text-white text-2xl font-bold">Logo</div>
      <ul className={`hidden md:flex space-x-4 items-end ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
        <li><a href="#" className="text-white hover:text-gray-300 font-bold">About</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 font-bold">F logo</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 font-bold">Instagram</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 font-bold">Contact</a></li>
      </ul>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-white hover:text-gray-300" onClick={toggleMobileMenu}>
          Menu
        </button>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-opacity-70 backdrop-filter backdrop-blur-md flex items-center justify-center">
          <div className="p-4 rounded-md">
            <a href="#" className="text-white font-bold-xl block">About</a>
            <a href="#" className="text-white  font-bold-xl block">F logo</a>
            <a href="#" className="text-white font-bold-xl block">Instagram</a>
            <a href="#" className="text-white  font-bold-xl block">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
