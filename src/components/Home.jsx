import React from "react";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Galeria from "./Galeria.jsx";
import Services from "./Services.jsx";
import Contactos from "./Contactos.jsx";
import Footer from "./Footer.jsx";
import "../index.css";
function Home() {
    return (
        <div>
            <Nav />
            <Hero />
            <About />
            <Galeria />
            <Services />
            <Contactos />
            <Footer />
        </div>
    );
}

export default Home;
