import React from "react";
import Nav from "./Reservar/Nav.jsx";
import Footer from "./Reservar/Footer.jsx";
import Horarios_Precios from "./Reservar/Horarios_Precios.jsx";
import Info from "./Reservar/Info.jsx";


function MainReservar() {
    return (
        <div>
            <Nav />
            <br />
            <br />
            <br />
            <h1 className="text-center text-3xl fuentePrecios text-amber-800 mb-6">
                Reserva tu hora
            </h1>
            <p className="px-4 text-xl max-w-sm text-center mx-auto sm:max-w-3xl lg:max-w-5xl">
                Planifica tu visita con antelación y evita esperas innecesarias.
                Nos comprometemos a recibirte con puntualidad en el horario que
                elijas. Tu comodidad es nuestra prioridad, y reservar tu corte
                de pelo nunca ha sido tan sencillo. Estamos ansiosos por
                brindarte un servicio excepcional. ¡Haz tu reserva ahora y
                prepárate para lucir tu mejor versión
            </p>
            <Info />
            
            <Horarios_Precios />
            
            <Footer />
        </div>
    );
}

export default MainReservar;
