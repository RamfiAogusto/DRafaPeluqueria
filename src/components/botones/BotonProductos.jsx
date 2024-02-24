import React from "react";
import Whatsapp_icon from './../../assets/whatsapp_icon.png'

function BotonProductos() {
    return (
        <a className="btn btn-primary">
                    <img src={Whatsapp_icon} alt="Icono WhatsApp" className="size-8"/>
                    Ver Productos
                </a>
    )
}

export default BotonProductos;
