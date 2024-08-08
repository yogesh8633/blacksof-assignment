import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Supreme_Group_Logo.png"; // Make sure to replace this with your actual logo path
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 py-4">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/applications" className="text-gray-700 hover:text-blue-500">Applications</Link>
          <Link to="/innovations" className="text-gray-700 hover:text-blue-500">Innovations</Link>
          <Link to="/company" className="text-gray-700 hover:text-blue-500">Company</Link>
          <Link to="/career" className="text-gray-700 hover:text-blue-500">Career</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="outline-none mobile-menu-button">
          <svg
              className="w-6 h-6 text-gray-500 hover:text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul>
          <li>
            <Link to="/applications" className="block text-sm px-2 py-4 text-gray-700 hover:bg-gray-200">Applications</Link>
          </li>
          <li>
            <Link to="/innovations" className="block text-sm px-2 py-4 text-gray-700 hover:bg-gray-200">Innovations</Link>
          </li>
          <li>
            <Link to="/company" className="block text-sm px-2 py-4 text-gray-700 hover:bg-gray-200">Company</Link>
          </li>
          <li>
            <Link to="/career" className="block text-sm px-2 py-4 text-gray-700 hover:bg-gray-200">Career</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
