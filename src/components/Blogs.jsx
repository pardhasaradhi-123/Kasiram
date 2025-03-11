import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import spain from "../assets/Blogs/spain.png";
import aston from "../assets/Blogs/AstonUniversity.jpg";
import QueensUniversity from "../assets/Blogs/Queen’s University.jpeg";

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  const blogs = [
    {
      title: "Study in Spain – 2-Year Stay Back Option!",
      description:
        "Spain now offers a 2-year stay back for international students! Enjoy English-taught programs with fees starting from €6,000/year and possible test waivers. Gain experience with multinational internships and work part-time for 30 hours/week. Top courses: Business, Tourism, IT, and Design. Start your future in Spain today!",
      image: spain, // Placeholder image
    },
    {
      title: "Study at Aston Business School – Top-Ranked Programs!",
      description:
        "Aston Business School, Birmingham UK, offers globally recognized programs with top rankings. The MSc Business Analytics is ranked 2nd in the UK and 7th in Europe for Data Analytics. The MSc International Business is ranked 4th in the UK and 20th in Europe for International Management. The MSc Business Management is ranked 6th in the UK for General Management. Aston Business School is also triple-accredited, ensuring world-class education and career opportunities!",
      image: aston,
    },
    {
      title: "Study MSc Finance and Trading at Queen’s University Belfast!",
      description:
        "Unlock your potential with the new *MSc Finance and Trading* program at *Queen’s University Belfast. Applications are now open for the **September 2025 intake*. Prepare for a successful career in finance with cutting-edge training and real-world insights. Secure your future today!",
      image: QueensUniversity, // Different size image
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16" data-aos="fade-up">
      {/* Heading */}
      <h2
        className="text-3xl font-semibold mb-6 text-center"
        data-aos="fade-up"
      >
        Blogs
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full max-w-3xl"
        data-aos="zoom-in"
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col h-auto"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Image Section */}
              <div className="h-60 md:h-72 w-full">
                <img
                  src={blog.image}
                  alt="Blog Image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="p-4 flex-1">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-700 text-sm">{blog.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blogs;
