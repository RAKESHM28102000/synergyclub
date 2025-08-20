import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}
