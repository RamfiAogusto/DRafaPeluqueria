import React from "react";
import "../index.css";
import BotonProductos from "./botones/BotonProductos";
import CartaServicios from "./CartaServicios";
import Producto from "./Producto";
import Back from "../assets/Herobarberia.webp";

function Services() {
    return (
        <div id="Services" className="mt-20 mb-20 ">
            <div className="w-full h-screen relative sm:max-h-[900px]">
                <div
                    className="flex flex-col items-center h-full w-full absolute z-0"
                    style={{
                        backgroundImage: `url(${Back})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
                <div className="w-full h-full bg-black opacity-90 z-10 absolute"></div>
                <CartaServicios />
            </div>

            {/* -------------PRODUCTO------------ */}
            <div>
                <div className="flex flex-wrap justify-center gap-7 mt-24 mb-7">
                    <Producto
                        nombre="Cerveza"
                        w_img_m="min-w-80"
                        w_img_l="min-w-80"
                    />
                    <Producto
                        nombre="Gelatina"
                        w_img_m="min-w-80"
                        w_img_l="min-w-80"
                    />
                    <Producto w_img_m="min-w-80" w_img_l="min-w-80" />
                </div>

                <div className="flex justify-center">
                    <BotonProductos />
                </div>
            </div>
        </div>
    );
}

export default Services;
