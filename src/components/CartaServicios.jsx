import React from "react";
import "../index.css";
function CartaServicios() {
    return (
        <div className="w-full fuentePrecios text-lg mb-6">
            <h2 className="text-3xl text-amber-800 text-center mb-6">Nuestros Servicios</h2>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3">Corte</p>
                <div className="divider divider-end w-full text-amber-800">$350</div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3">Corte a tijera</p>
                <div className="divider divider-end w-full text-amber-800">$400</div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3">Corte a adolescentes</p>
                <div className="divider divider-end w-full text-amber-800">$250</div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3">Corte a niños</p>
                <div className="divider divider-end w-full text-amber-800">$200</div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3">Cerquillos</p>
                <div className="divider divider-end w-full text-amber-800">$200</div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3">Cejas</p>
                <div className="divider divider-end w-full text-amber-800">$100</div>
            </div>
        </div>
    );
}

export default CartaServicios;
