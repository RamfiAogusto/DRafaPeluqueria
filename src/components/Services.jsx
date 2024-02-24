import React from "react";
import "../index.css";
import BotonProductos from "./botones/BotonProductos";
import CartaServicios from "./CartaServicios";
import Horarios from "./Horarios";
import Producto from "./Producto";

function Services() {
    return (
        <div className="mt-20 mb-20">
            <div className="flex flex-col items-center w-full lg:flex-row px-10">
                <div className="grid flex-grow min-w-72 p-10 card rounded-box place-items-center lg:w-8/12">
                    <CartaServicios />
                </div>

                <div className="divider lg:divider-horizontal"></div>

                <div className="grid flex-grow min-w-72 card rounded-box place-items-center lg:w-4/12">
                    <Horarios />
                </div>
            </div>
            {/* -------------PRODUCTO------------ */}
            <div>
                <div className="flex flex-wrap justify-center gap-7 mt-24 mb-7">
                    <Producto nombre="Cerveza"/>
                    <Producto nombre="Gelatina"/>
                    <Producto />
                </div>

                <div className="flex justify-center">
                    <BotonProductos />
                </div>
            </div>
        </div>
    );
}

export default Services;
