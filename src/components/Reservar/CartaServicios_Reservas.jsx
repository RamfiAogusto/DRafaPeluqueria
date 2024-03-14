import React from "react";
import "../../index.css";

function CartaServicios_Reservas() {
    return (
        <div className="w-full">
            <h2 className="text-3xl text-amber-800 text-center mb-6 fuentePrecios">
                Nuestros Servicios
            </h2>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 font-bold">Corte</p>
                <div className="divider divider-end w-full font-bold text-amber-800">
                    $350
                </div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 font-bold">Corte a tijera</p>
                <div className="divider divider-end w-full font-bold text-amber-800">
                    $450
                </div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 font-bold">
                    Corte a adolescentes
                </p>
                <div className="divider divider-end w-full font-bold text-amber-800">
                    $250
                </div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 font-bold">Corte a niños</p>
                <div className="divider divider-end w-full font-bold text-amber-800">
                    $200
                </div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 font-bold">Cerquillos</p>
                <div className="divider divider-end w-full font-bold text-amber-800">
                    $200
                </div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 font-bold">Cejas</p>
                <div className="divider divider-end w-full font-bold text-amber-800">
                    $100
                </div>
            </div>
            {/* ----------------- */}
            <div className="chat chat-start font-sans">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        />
                    </div>
                </div>
                <div className="chat-header">
                    Rafa
                    <time className="text-xs opacity-50 mx-2">
                        Hace un minuto
                    </time>
                </div>
                <div className="chat-bubble">
                    Estos precios están sujetos a cambios!
                </div>
            </div>
        </div>
    );
}

export default CartaServicios_Reservas;
