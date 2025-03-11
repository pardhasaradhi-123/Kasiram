import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <footer className="bg-blue-900 text-white py-8 px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo Section */}
        <div
          className="flex flex-col items-center md:items-start mb-6 md:mb-0"
          data-aos="fade-right"
        >
          <img
            src="https://via.placeholder.com/150" // Replace with actual logo
            alt="Kasiram Logo"
            className="w-24 mb-2"
          />
          <h2 className="text-lg font-bold uppercase">
            Kasiram Overseas Educational Consultancy
          </h2>
        </div>

        {/* Navigation Links */}
        <div
          className="text-center md:text-left mb-6 md:mb-0"
          data-aos="fade-up"
        >
          <h3 className="font-semibold text-lg">Important Links</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left" data-aos="fade-left">
          <h3 className="font-semibold text-lg">Links</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="text-center text-sm mt-6 border-t border-gray-700 pt-4"
        data-aos="fade-up"
      >
        © 2025 Kasiram Overseas Educational Consultancy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
