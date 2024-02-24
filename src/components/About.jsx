import React from "react";
import Aboutimg from "../assets/Aboutimg.webp";
import "../index.css";

function About() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Acerca de Nosotros</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className=" sombracuadrada">
                    <img src={Aboutimg} alt="Imagen barbero" className="max-w-xs border border-amber-800"/>
                </div>
            </div>
        </div>
    );
}

export default About;
