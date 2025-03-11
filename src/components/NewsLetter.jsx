import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section
      className="bg-indigo-800 text-white py-10 px-6 md:px-16 text-center relative"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4" data-aos="fade-down">
        Get Notified To Study Abroad
      </h2>

      {/* Input Field & Button */}
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-4"
        data-aos="zoom-in"
      >
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full md:w-1/2 px-4 py-3 rounded-lg text-black"
          data-aos="fade-right"
        />
        <button
          className="bg-white text-indigo-800 px-6 py-3 rounded-lg font-semibold"
          data-aos="fade-left"
        >
          Enter
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
