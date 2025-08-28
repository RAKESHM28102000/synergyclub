import React from "react";
import { Link } from "react-router-dom"; // import Link

const FacultySection = () => {
  return (
    <section className="py-20 text-white rounded-2xl shadow-lg border-2 border-red-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-12 text-gold"
          data-aos="fade-down"
        >
          Our Faculty
        </h2>

        {/* Two staff side by side */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Staff 1 */}
          <div
            className="flex flex-col items-center text-center space-y-4"
            data-aos="fade-right"
          >
            <img
              src="/images/khaja.jpg"
              alt="Dr. J. Khaja Sheriff"
              className="w-[300px] h-[300px] object-contain rounded-2xl shadow-xl border-4 border-gold"
            />
            <h3 className="text-2xl font-bold text-red-500">
              Dr. J. Khaja Sheriff
            </h3>
            <p className="text-gray-300">
              Program Convenor, Professor & Head, Department of Management
              Studies
            </p>
          </div>

          {/* Staff 2 */}
          <div
            className="flex flex-col items-center text-center space-y-4"
            data-aos="fade-left"
          >
            <img
              src="/images/vaneeta.jpg"
              alt="Dr. Vaneeta Aggarwal"
              className="w-[300px] h-[300px] object-contain rounded-2xl shadow-xl border-4 border-gold"
            />
            <h3 className="text-2xl font-bold text-red-500">
              Dr. Vaneeta Aggarwal
            </h3>
            <p className="text-gray-300">
              Program Coordinator, Synergy Management Club, DOMS
            </p>
          </div>
        </div>

        {/* Club Note + Button */}
        <div className="text-center space-y-6" data-aos="fade-up">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The{" "}
            <span className="text-gold font-semibold">
              Synergy Management Club
            </span>{" "}
            is dedicated to nurturing young managers by providing opportunities
            for leadership, collaboration, and innovation.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg transition inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
