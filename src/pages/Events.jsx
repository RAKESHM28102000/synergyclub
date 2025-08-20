import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Events() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen px-6 py-16 md:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-red-500 drop-shadow-lg"
          data-aos="fade-down"
        >
          Our <span className="text-gold">Events</span>
        </h1>
        <p
          className="mt-4 text-gray-300 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At <span className="text-gold">Synergy Club</span>, we host a variety of
          events that inspire creativity, learning, and cultural unity. From
          technical workshops to vibrant festivals — there’s something for everyone.
        </p>
      </div>

      {/* Event Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* MBA Events */}
        <div
          className="p-6 bg-red-900/30 rounded-2xl shadow-lg hover:scale-105 transition"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-red-500 mb-4">MBA Events</h2>
          <p className="text-gray-300">
            Interactive case studies, management competitions, and networking
            events tailored for future business leaders.
          </p>
        </div>

        {/* Power BI Workshop */}
        <div
          className="p-6 bg-red-900/30 rounded-2xl shadow-lg hover:scale-105 transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-bold text-gold mb-4">Power BI Workshops</h2>
          <p className="text-gray-300">
            Hands-on training sessions on data analytics and visualization using
            Microsoft Power BI to empower data-driven decision-making.
          </p>
        </div>

        {/* Guest Lecture */}
        <div
          className="p-6 bg-red-900/30 rounded-2xl shadow-lg hover:scale-105 transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Guest Lectures</h2>
          <p className="text-gray-300">
            Learn from industry experts, entrepreneurs, and academicians who share
            valuable insights and experiences.
          </p>
        </div>

        {/* Cultural Events */}
        <div
          className="p-6 bg-red-900/40 rounded-2xl shadow-lg hover:scale-105 transition"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-gold mb-4">Cultural Events</h2>
          <p className="text-gray-300">
            Music, dance, drama, and art – our cultural programs celebrate
            creativity and unity. A platform for students to showcase their talent.
          </p>
        </div>

        {/* Festival Celebrations */}
        <div
          className="p-6 bg-red-900/40 rounded-2xl shadow-lg hover:scale-105 transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-bold text-red-500 mb-4">Festival Celebrations</h2>
          <p className="text-gray-300">
            We celebrate Diwali, Holi, Christmas, Pongal, and other festivals with
            grandeur — bringing together different cultures in harmony.
          </p>
        </div>

        {/* Other Events */}
        <div
          className="p-6 bg-red-900/40 rounded-2xl shadow-lg hover:scale-105 transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Other Activities</h2>
          <p className="text-gray-300">
            Hackathons, debates, quiz competitions, charity drives, and many more
            engaging activities throughout the year.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20" data-aos="zoom-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
          Be a Part of <span className="text-red-500">Synergy Events</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Don’t miss the chance to participate in exciting events, enhance your
          skills, and create memories with a vibrant community.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-red-500 text-white font-semibold rounded-xl shadow-lg hover:bg-red-600 transition"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
