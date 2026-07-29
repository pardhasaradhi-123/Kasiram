import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/klogo.png";

const Footer = () => {
  return (
    <div data-aos="fade-up" className="bg-blue-900 text-white">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-8">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-2xl font-bold sm:text-left text-center mb-4 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="w-14" />
              Kasiram Overseas
            </h1>
            <p className="text-gray-300">
              Your gateway to world-class education. We guide students in choosing the best universities across the globe, ensuring a seamless transition to their dream careers.
            </p>
            <br />
            <div className="flex items-center gap-3 text-gray-300">
              <FaLocationArrow />
              <p>Anna Nagar, Chennai, India</p>
            </div>
            <div className="flex items-center gap-3 mt-3 text-gray-300">
              <FaMobileAlt />
              <p>+91 86808 00440</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="hover:text-gray-400 transition">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 text-gray-100">
                Quick Links
              </h1>
              <ul className="flex flex-col gap-3 text-gray-300">
                <li className="cursor-pointer hover:text-white transition">Home</li>
                <li className="cursor-pointer hover:text-white transition">About Us</li>
                <li className="cursor-pointer hover:text-white transition">Services</li>
                <li className="cursor-pointer hover:text-white transition">Contact</li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 text-gray-100">
                Study Destinations
              </h1>
              <ul className="flex flex-col gap-3 text-gray-300">
                <li className="cursor-pointer hover:text-white transition">United Kingdom</li>
                <li className="cursor-pointer hover:text-white transition">Canada</li>
                <li className="cursor-pointer hover:text-white transition">Australia</li>
                <li className="cursor-pointer hover:text-white transition">New Zealand</li>
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3 text-gray-100">
                Student Resources
              </h1>
              <ul className="flex flex-col gap-3 text-gray-300">
                <li className="cursor-pointer hover:text-white transition">Visa Guidance</li>
                <li className="cursor-pointer hover:text-white transition">Scholarships</li>
                <li className="cursor-pointer hover:text-white transition">Application Process</li>
                <li className="cursor-pointer hover:text-white transition">Student Testimonials</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-300">
        © 2025 Selva’s IAS Academy. All Rights Reserved.
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-300 flex flex-col gap-1">
        <span>© 2026 Kasiram Overseas | Empowering Global Education. All Rights Reserved.</span>
        <span>
          Developed By{" "}
          <a
            href="https://crackdevelopers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-400 font-semibold transition"
          >
            crackdevelopers
          </a>
        </span>
      </section>
    </div>
  );
};

export default Footer;
