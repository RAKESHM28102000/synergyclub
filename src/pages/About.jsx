import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FacultySection from "./FacultySection";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* University Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-extrabold text-red-500">
              University of <span className="text-white">Madras</span>
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Established in 1857, the University of Madras is one of the oldest and most prestigious universities in India. 
              With its headquarters in Chennai, it has a proud legacy of shaping leaders, academicians, and professionals across fields. 
              Notable alumni include <span className="text-gold">C. V. Raman, Srinivasa Ramanujan, Sarvepalli Radhakrishnan, A. P. J. Abdul Kalam, Indra Nooyi</span>, and many more.  
              Accredited with an <span className="text-red-500">A++</span> rating by NAAC, the University continues to be recognized as a center of excellence.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src="/images/chepauk.jpg"
              alt="University of Madras"
              className="rounded-2xl shadow-lg border-2 border-red-500"
            />
          </div>
        </div>

        {/* DOMS Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <img
              src="/images/doms.jpg"
              alt="DOMS"
              className="rounded-2xl shadow-lg border-2 border-gold"
            />
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <h2 className="text-3xl font-extrabold text-red-500">
              Department of <span className="text-white">Management Studies</span>
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Established in 1955, DOMS is among India’s oldest and most prestigious B-schools.  
              The department bridges academia and industry, offering a strong foundation in management 
              through its flagship <span className="text-gold">MBA program</span> and doctorate courses.  
              With a mix of permanent and visiting faculty, DOMS fosters both 
              <span className="text-red-500"> industry exposure</span> and <span className="text-gold">research excellence</span>, 
              preparing students to become impactful leaders.
            </p>
          </div>
        </div>

        {/* Synergy Club Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-extrabold text-red-500">
              Synergy <span className="text-white">Management Club</span>
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Founded in 2015 under DOMS, the Synergy Club is a student-driven initiative fostering 
              <span className="text-red-500"> leadership, creativity, and collaboration</span>.  
              For nearly a decade, it has enriched student life through academic, cultural, and social events.  
              Acting as a bridge between classroom learning and real-world practice, the club empowers students 
              to innovate, network, and lead with confidence.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src="/images/synergy logo.png"
              alt="Synergy Club"
              className="rounded-2xl shadow-lg border-2 border-red-500"
            />
          </div>
        </div>

        {/* Staff Section */}
        
         <FacultySection/>

      </div>
    </div>
  );
}
