import React from "react";

export default function About() {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-500">
            About <span className="text-white">Synergy Club</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            We are a passionate community driven by innovation, creativity, and collaboration.  
            Synergy Club connects individuals to build skills, exchange ideas, and grow together.
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold text-red-500">Who We Are</h2>
            <p className="mt-4 text-gray-300">
              We are a diverse group of students and professionals committed to exploring opportunities 
              in technology, leadership, and entrepreneurship. The Synergy Club acts as a platform 
              where ideas turn into impactful projects.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Who We Are"
              className="rounded-2xl shadow-lg border-2 border-red-500"
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
              alt="Mission"
              className="rounded-2xl shadow-lg border-2 border-white"
            />
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-red-500">Our Mission</h2>
            <p className="mt-4 text-gray-300">
              Our mission is to empower individuals with essential skills, 
              foster collaboration across disciplines, and prepare members 
              to become future leaders in their fields.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-red-500">What We Do</h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            From workshops and hackathons to mentorship programs and networking events,  
            we create opportunities that enable members to learn, grow, and succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-red-500 hover:scale-105 transition" data-aos="zoom-in">
              <h3 className="text-xl font-semibold text-white">Workshops</h3>
              <p className="mt-2 text-gray-400">
                Hands-on learning sessions in design, coding, leadership, and more.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-red-500 hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-white">Networking</h3>
              <p className="mt-2 text-gray-400">
                Connect with peers, mentors, and industry leaders to build your future.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg border border-red-500 hover:scale-105 transition" data-aos="zoom-in" data-aos-delay="400">
              <h3 className="text-xl font-semibold text-white">Projects</h3>
              <p className="mt-2 text-gray-400">
                Collaborate on real-world projects that solve meaningful challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-red-500">Why Join Us?</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            By joining Synergy Club, you gain access to opportunities that help you grow both personally and professionally.  
            Together, we create impact and inspire change.
          </p>
        </div>
      </div>
    </div>
  );
}
