import React from "react";
import CartaServicios_Reservas from "./CartaServicios_Reservas";
import Horarios from "../Horarios";

function Horarios_Precios() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="grid flex-grow min-w-72 p-10 card rounded-box place-items-center sm:w-8/12">
                <CartaServicios_Reservas />
                
            </div>

            <div className="divider lg:divider-horizontal"></div>

            <div className="grid flex-grow min-w-72 card rounded-box place-items-center sm:w-8/12">
                
                <Horarios />
            </div>
        </div>
    );
}

export default Horarios_Precios;
