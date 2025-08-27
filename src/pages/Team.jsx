import React, { useEffect } from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const members = [
    {
      name: "K Akash",
      role: "President",
      img: "/images/K Akash.jpg",
      email: "President@gmail.com",
      insta: "https://www.instagram.com/akash__5357",
      linkedin: "https://www.linkedin.com/in/k-akash-33a60b332",
    },
    {
      name: "Janani M",
      role: "Vice President",
      img: "/images/Janani M.jpg",
      insta: "https://www.instagram.com/__its._.jan__",
      linkedin: "https://www.linkedin.com/in/janani-murugan-831452226",
    },
    {
      name: "Shruthi C",
      role: "Treasurer",
      img: "/images/Shruthi C.jpg",
      insta: "https://www.instagram.com/shruthi.chandrasekaran",
      linkedin: "https://www.linkedin.com/in/shruthi-chandrasekaran-982689264",
    },
    {
      name: "Chrispin Presentia V",
      role: "Public Relationship Officer (PRO)",
      img: "/images/Chrispin Presentia V.png",
      insta: "https://www.instagram.com/dimple__18__",
      linkedin: "https://www.linkedin.com/in/chrispin-presentia-v-6a0636202",
    },
    {
      name: "Monish Kumar M",
      role: "Public Relationship Officer (PRO)",
      img: "/images/Monish Kumar M.jpg",
      insta: "https://www.instagram.com/monish_karthii",
      linkedin: "https://www.linkedin.com/in/monishkumarmkm",
    },
    {
      name: "Arulnambi G K",
      role: "Strategist",
      img: "/images/Arulnambi G K.png",
      insta: "https://www.instagram.com/arul_ngk",
      linkedin: "https://www.linkedin.com/in/arulngk180502",
    },
    {
      name: "Kishore G",
      role: "IT & Media Manager",
      img: "/images/Kishore G.jpg",
      insta: "https://www.instagram.com/kicchakisho21",
      linkedin: "https://www.linkedin.com/in/kishoreg21",
    },
    {
      name: "Trisha V",
      role: "Data Administrator",
      img: "/images/Trisha V.jpg",
      insta: "https://www.instagram.com/trisha.viswanathan",
      linkedin: "https://www.linkedin.com/in/trisha-viswanathan-520b43335",
    },
    {
      name: "Mohamed Nacir M",
      role: "Event Manager",
      img: "/images/Mohamed Nacir M.jpg",
      insta: "https://www.instagram.com/the_prodigy_00_",
      linkedin: "https://www.linkedin.com/in/mohamed-nacir-aa9807258",
    },
    {
      name: "Bala Sahana S",
      role: "Event Manager",
      img: "/images/Bala Sahana S.jpg",
      insta: "https://www.instagram.com/i__sahana",
      linkedin:
        "https://www.linkedin.com/in/bala-sahana-senthil-kumaran-a7143831b",
    },
    {
      name: "Muthu Malar R",
      role: "Event Manager",
      img: "/images/Muthu Malar R.jpg",
      insta: "https://www.instagram.com/123dracarys",
      linkedin: "https://www.linkedin.com/in/muthu-malar-r-756837251",
    },
    {
      name: "ABISHAKE E",
      role: "Event Manager",
      img: "/images/ABISHAKE E.jpg",
      insta: "https://www.instagram.com/mr._kiddo_shake_",
      linkedin: "https://www.linkedin.com/in/abishake-e-447259293",
    },
    {
      name: "Madhan Kumar S",
      role: "Event Manager",
      img: "/images/Madhan Kumar s.jpg",
      insta: "https://www.instagram.com/madhanraj1107",
      linkedin: "https://www.linkedin.com/in/madhan-kumar-6958901b9",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-12">
      <h1
        className="text-4xl md:text-5xl font-extrabold text-center text-red-500 mb-12"
        data-aos="fade-down"
      >
        Meet Our <span className="text-yellow-400">Team</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {members.map((m, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-b from-red-900/40 to-black border border-red-500 rounded-2xl p-6 text-center shadow-lg transition transform hover:scale-105 hover:shadow-red-500/50 group"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {/* Hover lighting glow */}
            <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 blur-lg rounded-2xl transition"></div>

            <div className="relative z-10">
              <img
                src={m.img}
                alt={m.name}
                className="mx-auto rounded-full w-32 h-32 object-contain border-4 border-red-500 shadow-md"
              />
              <h2 className="text-xl font-bold mt-4 text-yellow-400">
                {m.name}
              </h2>
              <p className="text-gray-300">{m.role}</p>

              <div className="flex justify-center gap-4 mt-4">
                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    className="text-red-500 hover:text-yellow-400 transition text-xl"
                  >
                    <FaEnvelope />
                  </a>
                )}
                {m.insta && (
                  <a
                    href={m.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-yellow-400 transition text-xl"
                  >
                    <FaInstagram />
                  </a>
                )}
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-yellow-400 transition text-xl"
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
