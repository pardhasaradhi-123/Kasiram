import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import usa from "../assets/CountriesProvide/usa.jpg";
import canada from "../assets/CountriesProvide/canada.jpg";
import uk from "../assets/CountriesProvide/uk.jpg";
import australia from "../assets/CountriesProvide/australia.jpg";
import germany from "../assets/CountriesProvide/germany.jpg";

const countries = [
  { id: 1, name: "USA", image: usa },
  { id: 2, name: "Canada", image: canada },
  { id: 3, name: "UK", image: uk },
  { id: 4, name: "Australia", image: australia },
  { id: 5, name: "Germany", image: germany },
];

const CountriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with 1s duration
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === countries.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? countries.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-10 px-6 bg-gray-100">
      {/* Heading & Description */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Countries We Provide
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-2">
          Start your transformative educational journey abroad. Immerse in
          diverse cultures, unlock new perspectives, and forge lifelong
          connections. Your adventure begins with studying abroad.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto mt-8 overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {countries.map((country) => (
            <div key={country.id} className="w-full flex-shrink-0">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg"
                data-aos="zoom-in"
              />
              <h3
                className="text-center mt-2 font-semibold text-lg"
                data-aos="fade-up"
              >
                {country.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={prevSlide}
          data-aos="fade-right"
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={nextSlide}
          data-aos="fade-left"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2" data-aos="fade-up">
        {countries.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CountriesSection;
