import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Events() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const events = [
    {
      name: "Farewell 2025",
      desc: "A heartfelt farewell to our graduating seniors, filled with memories, joy, and celebrations.",
      color: "text-red-500",
      images: [
        "/images/events/fw-1.jpeg",
        "/images/events/fw-2.JPG",
        "/images/events/fw-3.JPG",
        "/images/events/fw-4.jpeg",
         "/images/events/fw-5.jpeg",
      ],
    },
    {
      name: "INIZIO DI SINERGIO",
      desc: "An innovation-driven event that fosters creativity, leadership, and collaboration.",
      color: "text-gold",
      images: [
        "/images/events/ids.png",
       "/images/events/ids-1.jpeg",
      "/images/events/ids-2.jpeg",
      "/images/events/ids-3.jpeg",
        
      ]
    },
    {
      name: "NIRA - Women’s Day Celebration",
      desc: "Dedicated to empowering women, celebrating achievements, and fostering equality.",
      color: "text-white",
      images: [
        "/images/events/wds-1.png",
        "/images/events/wds-2.jpeg",
         "/images/events/wds-3.jpeg",
         "/images/events/wds-4.jpeg",
      ],
    },
    {
      name: "Power BI for Managers",
      desc: "Hands-on training on business analytics and visualization for future leaders.",
      color: "text-gold",
      images: [
        "/images/events/pbi-1.jpg",
        "/images/events/pbi-2.jpeg",
        "/images/events/pbi-3.jpeg",
       "/images/events/pbi-4.jpeg",
      ],
    },
  ];

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
          At <span className="text-gold">Synergy Club</span>, we host impactful
          events that inspire creativity, learning, and unity. Here are our key highlights.
        </p>
      </div>

      {/* Event Sections */}
      {events.map((event, i) => (
        <div key={i} className="mb-20" data-aos="fade-up">
          {/* Event Header */}
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${event.color}`}
            data-aos="fade-right"
          >
            {event.name}
          </h2>
          <p className="text-gray-300 mb-8 max-w-3xl" data-aos="fade-left">
            {event.desc}
          </p>

          {/* Event Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {event.images.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl shadow-lg border border-red-500"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <img
                  src={img}
                  alt={`${event.name} ${idx + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Call to Action */}
      <div className="text-center mt-20" data-aos="zoom-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
          Be a Part of <span className="text-red-500">Synergy Events</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Don’t miss the chance to participate in exciting events, enhance your
          skills, and create unforgettable memories with a vibrant community.
        </p>
        <a
          href="https://www.linkedin.com/company/synergy-mudoms/" target="_blank"
          className="px-8 py-4 bg-red-500 text-white font-semibold rounded-xl shadow-lg hover:bg-red-600 transition"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
