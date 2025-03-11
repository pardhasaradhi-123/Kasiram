import { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <nav
      className="bg-[#0c0c50] p-4 flex flex-col md:flex-row items-center justify-between relative"
      data-aos="fade-down"
    >
      <div
        className="flex items-center justify-between w-full md:w-auto"
        data-aos="fade-right"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/kasiram-logo.png"
            alt="Kasiram Logo"
            className="h-10 md:h-12"
          />
          <div className="text-white font-bold text-lg text-center md:text-left max-md:hidden max-sm:hidden lg:hidden">
            KASIRAM <br />
            <span className="text-sm">OVERSEAS EDUCATIONAL CONSULTANCY</span>
          </div>
        </div>

        {/* Mobile Menu Button (Only Visible on Mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute top-full left-0 text-white w-full md:static md:w-auto md:bg-transparent md:flex md:items-center transition-transform duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex`}
        data-aos="fade-up"
      >
        <ul className="flex flex-col max-md:bg-[#0c0c50] md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About us</li>
          <li className="hover:underline cursor-pointer">Blogs</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Country</li>
        </ul>
      </div>

      {/* Search Bar (Hidden on mobile) */}
      <div
        className="relative flex-grow max-w-md w-full md:mx-4 hidden md:block"
        data-aos="zoom-in"
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-10 rounded-full bg-gray-200 text-black focus:outline-none"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-600" />
      </div>

      {/* Contact Button */}
      <button
        className="bg-white text-[#0c0c50] px-4 py-2 rounded-full border border-white hover:bg-gray-200 w-full md:w-auto max-md:hidden max-sm:hidden"
        data-aos="fade-left"
      >
        Contact us
      </button>
    </nav>
  );
};

export default Navbar;
