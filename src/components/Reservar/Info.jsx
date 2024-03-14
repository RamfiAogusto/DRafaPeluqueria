import React from "react";
import '../../index.css'

function Info() {
    return (
        <div className="text-center max-w-sm mx-auto my-10 p-7 bg-base-300 rounded-xl sm:max-w-3xl">
            <h1 className="text-center font-bold text-3xl mb-6">Leer antes de reservar</h1>

            <ul className="text-start text-lg list">
                <li className="mb-2">
                    La reservación de turnos significa que el cliente va a venir
                    y recibir el servicio en un horario ya acordado mutuamente.
                </li>
                <li className="mb-2">
                    La reservación es un servicio monetizado, con el cual el
                    cliente se compromete a pagar conforme a una cifra ya
                    acordada.
                </li>
                <li className="mb-2">
                    La reservación; El Cliente se compromete a pagarla conforme,
                    aunque no haya podido venir por (x, o, y) razones.
                </li>
                <li className="mb-3">
                    Se les agradece amablemente al que ya no pueda llegar,
                    notificarme para seguir adelante con los demás clientes.
                </li>
            </ul>
            <p className="text-start text-lg">
                Este sistema de reservaciones de turnos, siguiendo las normas,
                no afecta el sistema tradicional de venir y hacer su turno aquí.
                Este servicio fue creado a petición de un público. Seguimos
                complaciendo y Dios bendiciendo, <strong>Amén.</strong>
            </p>
            
        </div>
    );
}

export default Info;
