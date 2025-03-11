import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyKasiram = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  const points = [
    { title: "Personalized Approach" },
    { title: "Expertise and Experience" },
    { title: "Innovative Solutions" },
    { title: "Global Network" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % points.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + points.length) % points.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, [currentIndex]);

  return (
    <section
      className="bg-gray-200 py-10 px-6 text-center relative"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-down">
        Why <span className="text-indigo-600">Kasiram?</span>
      </h2>

      {/* Card Container - Only One Card Visible */}
      <div
        className="relative flex justify-center items-center"
        data-aos="zoom-in"
      >
        {/* Left Arrow */}
        <button
          className="absolute left-4 bg-gray-800 text-white p-2 rounded-full"
          onClick={prevSlide}
          data-aos="fade-right"
        >
          ◀
        </button>

        <div className="w-96 h-40 flex justify-center items-center overflow-hidden">
          <div
            className="bg-white w-full h-40 p-4 rounded-lg shadow-md flex justify-center items-center text-center transition-transform duration-500"
            key={currentIndex}
            data-aos="flip-left"
          >
            <p className="font-semibold">{points[currentIndex].title}</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 bg-gray-800 text-white p-2 rounded-full"
          onClick={nextSlide}
          data-aos="fade-left"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2" data-aos="fade-up">
        {points.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-indigo-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default WhyKasiram;
