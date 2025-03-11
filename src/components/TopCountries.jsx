import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import australiaImg from "../assets/TopCountries/Australia.jpg";
import us from "../assets/TopCountries/United States.jpg";
import uk from "../assets/TopCountries/United Kingdom.jpg";

const TopCountries = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // AOS initialization
  }, []);

  const countries = [
    {
      country: "United States",
      image: us,
      description: "Home to top universities like Harvard, MIT, and Stanford",
    },
    {
      country: "Australia",
      description:
        "Studying in Australia offers diverse benefits: world-class education.",
      image: australiaImg,
    },
    {
      country: "UK",
      description:
        "Studying in the UK provides top-tier education, rich cultural experiences.",
      image: uk,
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center" data-aos="fade-up">
        <span className="text-blue-600 font-bold">Top Countries</span> to Study
        Abroad
      </h2>

      {/* Card Container */}
      <div
        className="mt-8 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 place-items-center"
        data-aos="fade-up"
      >
        {/* Country Cards */}
        {countries.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 w-72 h-60 p-4 rounded-lg shadow-md flex flex-col justify-between"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            {/* Image Section */}
            <div className="h-28 w-full">
              <img
                src={item.image}
                alt={item.country}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Text Section */}
            <div>
              <h3 className="text-lg font-semibold">{item.country}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>

            {/* Button Section */}
            <button
              className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
              data-aos="fade-up"
              data-aos-delay={index * 300}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCountries;
