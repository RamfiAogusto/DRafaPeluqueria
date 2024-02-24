import React from "react";
import Heroimage from "../assets/Herobarberia.webp";

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
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Hola hola hola hola hola Hola hola hola hola hola Hola
                        hola hola hola hola Hola hola hola hola hola Hola hola
                        hola hola hola Hola hola hola hola hola
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
