import React from "react";
import Carticon from "./../../assets/iconos/cart-1-svgrepo-com.svg";
import { Link } from "react-router-dom";
function BotonProductos() {
    return (
        <Link to="/Productos" className="btn btn-primary">
            <img src={Carticon} alt="Icono carrito" className="size-8 font-bold" />
            Ver Productos
        </Link>
    );
}

export default BotonProductos;
