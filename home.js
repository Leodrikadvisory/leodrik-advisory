// src/pages/Home.js
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaLaptopCode, FaChartLine, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={30} />,
    title: "Web Development",
    description: "Custom websites and web apps optimized for performance and UX.",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Business Consulting",
    description: "Data-driven strategies to grow your business effectively.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "Team Training",
    description: "Workshops and sessions to upskill your employees.",
  },
];

const testimonials = [
  {
    name: "John Doe",
    company: "Acme Corp",
    quote: "Leodrik Advisory transformed our website and doubled our traffic!",
  },
  {
    name: "Jane Smith",
    company: "Tech Solutions",
    quote: "Their consulting insights were actionable and highly effective.",
  },
  {
    name: "Alex Johnson",
    company: "Startup X",
    quote: "Exceptional service and professionalism throughout the process.",
  },
];

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Leodrik Advisory
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Advanced consulting for businesses and tech solutions
        </motion.p>
        <motion.button
          className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 w-72 hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 text-blue-600">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <Swiper spaceBetween={50} slidesPerView={1} loop autoplay={{ delay: 3000 }}>
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="max-w-xl mx-auto bg-gray-100 p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-gray-500">{t.company}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
        <p className="mb-8">Contact us today and take your business to the next level!</p>
        <a
          href="#contact"
          className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-500 transition"
        >
          Schedule a Consultation
        </a>
      </section>
    </div>
  );
}

