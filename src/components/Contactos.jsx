import React from "react";
import Redes_cont from "./Redes_cont";
import Mapa from "./Mapa";
import Form from './Form'

function Contactos() {
    return (
        <div id="Contacts" className="hero min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse w-full">
                <div className="text-center lg:text-left w-8/12">
                    <Redes_cont />
                    <Mapa />
                </div>
                <div className="card shrink-0 w-full lg:w-2/5">
                    <h2 className="fuentePrecios text-3xl text-center text-amber-800">Contactos</h2>
                    <Form /> 
                </div>
            </div>
        </div>
    );
}

export default Contactos;
