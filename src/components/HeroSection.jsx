import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import vid from "../assets/vid.mp4";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section className="relative h-screen flex items-center text-white">
      {/* Background Video */}
      <video
        src={vid}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Content (Text aligned to the left) */}
      <div className="relative z-10 w-full max-w-3xl px-8 md:px-24 text-left">
        <h1 className="text-3xl md:text-6xl font-bold" data-aos="fade-right">
          A plan for every <br />
          <span className="text-purple-700">Dream</span>
        </h1>
        <p className="text-white text-lg mt-4" data-aos="fade-right">
          Expand your horizons: study abroad with Kasiram!
        </p>
        <button
          className="mt-6 px-4 py-2 border border-white rounded-lg hover:bg-purple-700 hover:text-white transition hover:border-none"
          data-aos="zoom-in"
        >
          Learn more
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
