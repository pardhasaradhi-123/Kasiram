import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section
      className="py-10 px-6 bg-gradient-to-b from-gray-200 to-indigo-700"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2
        className="text-center text-2xl md:text-3xl font-bold text-white mb-6"
        data-aos="zoom-in"
      >
        <span className="text-indigo-900">Contact</span> us
      </h2>

      {/* Form Container */}
      <div
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <form className="flex flex-col gap-4">
          {/* Name Field */}
          <div data-aos="fade-right">
            <label className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email Field */}
          <div data-aos="fade-left">
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message Field */}
          <div data-aos="fade-right">
            <label className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
            data-aos="zoom-in"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
