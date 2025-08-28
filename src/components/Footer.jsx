// src/components/Footer.jsx
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ import Link
import synergyLogo from "/images/synergy logo.png"; // replace with actual logo

export default function Footer() {
  return (
    <footer className="bg-[#E43636] text-[#F6EFD2]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section - Logo & Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={synergyLogo}
            alt="Synergy Logo"
            className="w-16 h-16 mb-3 rounded-full"
          />
          <h2 className="text-2xl font-bold">Synergy Club</h2>
          <p className="mt-2 text-sm text-[#E2DDB4]">
            A complete student-organised management club, part of the Department
            of Management Studies, University of Madras.
          </p>
        </div>

        {/* Middle Section - Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Pages</h3>
          <ul className="space-y-3">
            {["Home", "About", "Events", "Team", "Contact"].map((page) => (
              <li key={page}>
                <Link
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`} // ✅ react-router navigation
                  className="px-4 py-2 my-1.5 rounded-full bg-none text-white font-medium 
                             hover:bg-[#E2DDB4] hover:text-black 
                             active:bg-black active:text-[#F6EFD2]
                             transition-all duration-300 shadow-sm"
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-[#F6EFD2] text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#F6EFD2]" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#F6EFD2]" /> synergy.infobank@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#F6EFD2]" /> University of Madras, Chennai
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-xl">
            {[
              { icon: <FaInstagram />, link: "https://www.linkedin.com/company/synergy-mudoms/" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/synergy-mudoms/" },
              { icon: <FaYoutube />, link: "https://www.linkedin.com/company/synergy-mudoms/" },
              { icon: <FaWhatsapp />, link: "https://www.linkedin.com/company/synergy-mudoms/" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#F6EFD2] text-[#E43636] 
                           hover:bg-[#E2DDB4] hover:text-black 
                           active:bg-black active:text-[#F6EFD2] 
                           transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#F6EFD2] text-[#E43636] text-center py-3 text-sm font-medium">
        © {new Date().getFullYear()} Website created by{" "}
        <a
          href="https://inspireloop.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold uppercase text-white bg-black p-1.5 rounded-lg hover:text-red-700 transition"
        >
          Rakesh InspireLoop Tech
        </a>
      </div>
    </footer>
  );
}
