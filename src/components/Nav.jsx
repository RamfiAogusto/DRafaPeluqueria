import React from "react";
import "../index.css";
import BotonReserva from "./botones/BotonReserva";

function Nav() {
    return (
        <div className="navbar bg-base-300 fixed z-50 font-semibold">
            <div className="navbar-start">
                <div className="dropdown uppercase">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li className="mb-2">
                            <a href="#Inicio">Inicio</a>
                        </li>
                        <li className="mb-2">
                            <a href="#About">Acerca de Nosotros</a>
                        </li>
                        <li className="mb-2">
                            <a href="#Galeria">Galeria</a>
                        </li>
                        <li className="mb-2">
                            <a>Servicios</a>
                            <ul className="p-2">
                                <li className="mb-2">
                                    <a href="#Services">Servicios</a>
                                </li>
                                <li className="mb-2">
                                    <a href="Products">Productos</a>
                                </li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <a href="#Contacts">Contactos</a>
                        </li>
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-xl fuentePrecios text-amber-700">D'Rafa Peluquería</a>
            </div>
            <div className="navbar-center hidden uppercase lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    <li className="mx-1 text-amber-700">
                        <a href="#Inicio">Inicio</a>
                    </li>
                    <li className="mx-1 hover:text-amber-700">
                        <a href="#About">Acerca de Nosotros</a>
                    </li>
                    <li className="mx-1 hover:text-amber-700">
                        <a href="#Galeria">Galeria</a>
                    </li>
                    <li className="mx-1">
                        <details>
                            <summary>Servicios</summary>
                            <ul className="p-2">
                                <li className=" hover:text-amber-700">
                                    <a href="#Services">Servicios</a>
                                </li>
                                <li className=" hover:text-amber-700">
                                    <a href="Productos">Productos</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li className="mx-1 hover:text-amber-700">
                        <a href="#Contacts">Contacto</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                <BotonReserva />
            </div>
        </div>
    );
}

export default Nav;
