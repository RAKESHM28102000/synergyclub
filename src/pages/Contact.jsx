import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // 🔹 replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // 🔹 replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // 🔹 replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <section
      className="p-10 min-h-screen flex flex-col items-center justify-center"
      data-aos="fade-up"
    >
      <div className="max-w-2xl w-full">
        <h2
          className="text-4xl font-bold mb-6 text-center"
          style={{ color: "#948979" }}
          data-aos="zoom-in"
        >
          Contact Us
        </h2>

        {/* Info */}
        <div
          className="mb-8 text-center"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <p>Email:synergy.infobank@gmail.com</p>
          <p>Location: Department of Management Studies, University of Madras</p>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 outline-red-600 outline-1 p-6 rounded-2xl shadow-lg"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded-lg bg-[#222831] text-white border border-[#948979] focus:ring-2 focus:ring-red-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded-lg bg-[#222831] text-white border border-[#948979] focus:ring-2 focus:ring-red-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-[#222831] text-white border border-[#948979] focus:ring-2 focus:ring-red-500 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
