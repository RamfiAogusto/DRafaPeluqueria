import React from "react";
import Aboutimg from "../assets/Aboutimg.webp";
import "../index.css";

function About() {
    return (
        <div id="About" className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-full sm:w-2/3 lg:text-left ">
                    <h2 className="text-5xl font-bold fuentePrecios text-amber-700">
                        Acerca de Nosotros
                    </h2>
                    <p className="py-6">
                        Sumérgete en el mundo de la barbería con un maestro en
                        el arte. Con más de 20 años de dedicación, Rafa te
                        ofrece cortes que trascienden el tiempo. Descubre la
                        pericia de un experto, donde cada detalle cuenta. Tu
                        estilo es nuestra prioridad; únete a Rafa para una
                        experiencia única de barbería.
                    </p>
                </div>
                <div className=" sombracuadrada">
                    <img
                        src={Aboutimg}
                        alt="Imagen barbero"
                        className="max-w-xs border border-amber-800"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
