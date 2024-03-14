import React from "react";
import Whatsapp_icon from './../../assets/whatsapp_icon.png'


function BotonReserva() {
    return (
        <a href="Reservar" className="btn bg-green-500 text-white hover:bg-green-400">
                    <img src={Whatsapp_icon} alt="Icono WhatsApp" className="size-8 font-bold"/>
                    Reservar
                </a>
    )
}

export default BotonReserva;
