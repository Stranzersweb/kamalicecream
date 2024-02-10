import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-10 right-10 z-50 flex items-center justify-between p-8 bg-transparent">
      <div className="text-white text-3xl font-bold">Logo</div>
      <ul className="flex space-x-4 items-end">
        <li><a href="#" className="text-white hover:text-gray-300 font-bold">About</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 font-bold">F logo</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 font-bold">Instagram</a></li>
        <li><a href="#" className="text-white hover:text-gray-300 font-bold">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
