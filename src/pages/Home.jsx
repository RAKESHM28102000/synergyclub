import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import About from "./About";
import Events from "./Events";
import Team from "./Team";
import Contact from "./Contact";

AOS.init();

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 bg-gradient-to-b from-black via-red-900/40 to-black">
        <h1
          className="text-5xl md:text-7xl font-extrabold text-red-500 drop-shadow-lg"
          data-aos="fade-up"
        >
          Welcome to <span className="text-gold">Synergy Club</span>
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A community of <span className="text-gold">innovation</span>,{" "}
          <span className="text-red-500">creativity</span>, and{" "}
          <span className="text-gold">collaboration</span>.  
          We shape leaders and empower change-makers for tomorrow.
        </p>
        <div
          className="mt-8 flex flex-col md:flex-row gap-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <a
            href="/about"
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl shadow-lg hover:bg-red-600 transition"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-gold text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-500 transition"
          >
            Join Us
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-black">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gold mb-12"
          data-aos="fade-down"
        >
          Why Choose <span className="text-red-500">Synergy?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div
            className="p-6 bg-red-900/30 rounded-2xl shadow-lg text-center hover:scale-105 transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-red-500">Innovation</h3>
            <p className="text-gray-300 mt-3">
              We encourage new ideas and bring creative solutions to real-world challenges.
            </p>
          </div>
          <div
            className="p-6 bg-red-900/30 rounded-2xl shadow-lg text-center hover:scale-105 transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold text-gold">Collaboration</h3>
            <p className="text-gray-300 mt-3">
              Work together with like-minded individuals to achieve extraordinary outcomes.
            </p>
          </div>
          <div
            className="p-6 bg-red-900/30 rounded-2xl shadow-lg text-center hover:scale-105 transition"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-bold text-white">Leadership</h3>
            <p className="text-gray-300 mt-3">
              Build leadership skills and take part in shaping a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-t from-black via-red-900/30 to-black">
        <h2
          className="text-3xl md:text-5xl font-extrabold text-gold"
          data-aos="zoom-in"
        >
          Be Part of the Future 🚀
        </h2>
        <p
          className="mt-4 text-gray-300 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The journey to success begins with a single step. Take that step today
          and be part of a club that thrives on passion and purpose.
        </p>
        <a
          href="/about"
          className="mt-8 inline-block px-8 py-4 bg-red-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-red-600 transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Get Started
        </a>
      </section>
      <About/>
      <Events/>
      <Team/>
      <Contact/>
    </div>
  );
}
