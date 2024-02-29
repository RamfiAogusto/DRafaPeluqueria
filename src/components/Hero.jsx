import React from "react";
import Heroimage from "../assets/Herobarberia.webp";
import callicon from '../assets/iconos/phone-svgrepo-com.svg';

function Hero() {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${Heroimage})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md flex-col items-center lg:max-w-lg flex">
                    <h1 className="mb-5 text-5xl font-bold fuentePrecios text-amber-700">
                        D' Rafa Peluquería
                    </h1>
                    <p className="mb-5 text-xl">
                        Sumérgete en el mundo de la barbería con un maestro en
                        el arte. Con más de 20 años de dedicación, Rafa te
                        ofrece cortes que trascienden el tiempo. Descubre la
                        pericia de un experto, donde cada detalle cuenta. Tu
                        estilo es nuestra prioridad; únete a Rafa para una
                        experiencia única de barbería.
                    </p>
                    <button className="btn btn-primary flex gap-0 pr-3 pl-1"><img src={callicon} alt="call icon" className="w-h-8 h-8 m-0" />Contáctenos</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
