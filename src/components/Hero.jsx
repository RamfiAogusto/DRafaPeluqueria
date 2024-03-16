import React from "react";
import Heroimage from "../assets/vintage-.jpg";
import BotonContactar from "./botones/BotonContactar";

function Hero() {
    return (
        <div
            id="Inicio"
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${Heroimage})`,
                
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md flex-col items-center lg:max-w-lg flex">
                    <h1 className="mb-4 mt-24 text-5xl font-bold fuentePrecios text-amber-700">
                        D' Rafa Peluquería
                    </h1>
                    <h2 className="text-2xl uppercase fuentePrecios mb-9">
                        El don del corte
                    </h2>

                    <BotonContactar url="Reservar" />
                    <svg
                        className="w-10 h-10 absolute bottom-3 md:hidden"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#a0420b"
                        transform="rotate(0)"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke=""
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{" "}
                            <path
                                d="M12 6V14"
                                stroke=""
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{" "}
                            <path
                                d="M15 11L12 14L9 11"
                                stroke=""
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{" "}
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Hero;
