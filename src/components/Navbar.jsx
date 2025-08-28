import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/images/synergy logo.png"; // <- place your logo in src/assets

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/team", label: "Team" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#cf0202] px-6 md:px-12 py-3 flex justify-between items-center shadow-md">
      {/* Logo & Name */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Synergy Logo" className="h-10 w-10 rounded-full" />
        <Link
          to="/"
          className="text-[#F6EFD2] text-xl md:text-2xl font-extrabold tracking-wide"
        >
          Synergy Club
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base font-medium">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="px-4 py-2 rounded-full bg-[#F6EFD2] text-[#E43636] 
                         hover:bg-[#E2DDB4] hover:text-black 
                         active:bg-black active:text-[#F6EFD2]
                         transition-all duration-300 shadow-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-[#F6EFD2] text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#E43636] p-6 flex flex-col gap-4 md:hidden shadow-lg z-50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-full bg-[#F6EFD2] text-[#E43636] font-semibold 
                         hover:bg-[#E2DDB4] hover:text-black 
                         active:bg-black active:text-[#F6EFD2]
                         text-center transition-all duration-300 shadow"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
