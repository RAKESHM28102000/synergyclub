import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200, // animation duration in ms
  once: true,     // whether animation should happen only once
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





