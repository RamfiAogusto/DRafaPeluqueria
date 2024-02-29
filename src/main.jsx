import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contactos from "./components/Contactos.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Nav />
        <Hero />
        <About />
        <Services />
        <Contactos />
        <Footer />
    </React.StrictMode>
);
