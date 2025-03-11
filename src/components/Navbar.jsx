import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <nav
      className="bg-[#0c0c50] p-4 flex items-center justify-between relative"
      data-aos="fade-down"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2" data-aos="fade-right">
        <img src={logo} alt="Kasiram Logo" className="h-14 md:h-16" />{" "}
        {/* Increased size */}
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute top-full left-0 text-white w-full md:static md:w-auto md:bg-transparent md:flex md:items-center transition-transform duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex`}
        data-aos="fade-up"
      >
        <ul className="flex flex-col max-md:bg-[#0c0c50] md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
          <li className="hover:underline cursor-pointer tracking-wide">Home</li>
          <li className="hover:underline cursor-pointer tracking-wide">
            About us
          </li>
          <li className="hover:underline cursor-pointer tracking-wide">
            Blogs
          </li>
          <li className="hover:underline cursor-pointer tracking-wide">
            Services
          </li>
          <li className="hover:underline cursor-pointer tracking-wide">
            Country
          </li>
        </ul>
      </div>

      {/* Contact Button (Icon on mobile, Text on larger screens) */}
      <div>
        <button
          className="bg-white text-[#0c0c50] px-4 py-2 rounded-full border border-white hover:bg-gray-200 w-12 md:w-auto flex items-center justify-center"
          data-aos="fade-left"
        >
          <FaUser className="md:hidden" size={35} /> {/* Increased icon size */}
          <span className="hidden md:block">Contact us</span>{" "}
          {/* Text for larger screens */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
