import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Reservar/Nav.jsx";
import Footer from "./Reservar/Footer.jsx";
import Horarios_Precios from "./Reservar/Horarios_Precios.jsx";
import Info from "./Reservar/Info.jsx";
import BotonContactar from "./botones/BotonContactar.jsx";

function mainReservar() {
    return (
        <div>
            <Nav />
            <br />
            <br />
            <br />
            <h1 className="text-center text-3xl fuentePrecios mb-6">
                Reserva tu hora
            </h1>
            <p className="px-4 text-xl max-w-sm text-center mx-auto sm:max-w-3xl">
                Planifica tu visita con antelación y evita esperas innecesarias.
                Nos comprometemos a recibirte con puntualidad en el horario que
                elijas. Tu comodidad es nuestra prioridad, y reservar tu corte
                de pelo nunca ha sido tan sencillo. Estamos ansiosos por
                brindarte un servicio excepcional. ¡Haz tu reserva ahora y
                prepárate para lucir tu mejor versión
            </p>
            <Info />
            <BotonContactar url="#desdereservas" texto="Reservar" />
            <Horarios_Precios />
            <Link to="/">Volver a la página principal</Link> {/* Agregar enlace para volver a la página principal */}
            <Footer />
        </div>
    );
}

export default mainReservar;
