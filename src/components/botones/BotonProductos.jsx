import React from "react";
import Carticon from "./../../assets/iconos/cart-1-svgrepo-com.svg";

function BotonProductos() {
    return (
        <a href="Productos" className="btn btn-primary">
            <img src={Carticon} alt="Icono carrito" className="size-8 font-bold" />
            Ver Productos
        </a>
    );
}

export default BotonProductos;
