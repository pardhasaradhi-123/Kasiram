import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/AboutUsLOGO.png";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section
      className="bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center"
      data-aos="fade-up"
    >
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-semibold" data-aos="fade-right">
          About <span className="text-indigo-700">Kasiram</span>
        </h2>
        <p className="text-gray-600 text-sm" data-aos="fade-right">
          Transformative education journeys abroad. Tailored guidance,
          integrity-driven. Navigating selection, applications, tests, visas,
          scholarships. Unlocking global potential, forging trust.
        </p>
        <ul className="text-gray-700 space-y-1 flex flex-col gap-3">
          <li data-aos="fade-right">✅ Quality consultancy</li>
          <li data-aos="fade-right">✅ 100% scholarship to study abroad</li>
          <li data-aos="fade-right">✅ Gateway to Global Opportunities</li>
        </ul>
      </div>

      {/* Right Content (Image) */}
      <div
        className="md:w-1/2 flex justify-center mt-6 md:mt-0"
        data-aos="zoom-in"
      >
        <img
          src={img}
          alt="Student holding flags"
          className="rounded-lg w-80 md:w-96 shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutUs;
