import React from "react";

function Horarios() {
    return (
        <div className="w-full text-lg mb-6">
            <h2 className="text-3xl text-amber-800 text-center mb-6 fuentePrecios">Nuestros Horarios</h2>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap link-error pr-3">Lunes</p>
                <div className="divider divider-end link-error divider-error w-full ">CERRADO</div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 text-amber-800">Martes</p>
                <div className="divider divider-end w-full">8:00 a.m - 8:00 p.m </div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 text-amber-800">Miércoles</p>
                <div className="divider divider-end w-full">8:00 a.m - 8:00 p.m</div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 text-amber-800">Jueves</p>
                <div className="divider divider-end w-full">8:00 a.m - 8:00 p.m</div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 text-amber-800">Viernes</p>
                <div className="divider divider-end w-full">8:00 a.m - 8:00 p.m</div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 text-amber-800">Sábados</p>
                <div className="divider divider-end w-full">8:00 a.m - 8:00 p.m</div>
            </div>
            <div className="flex items-center justify-between min-w-full">
                <p className="text-nowrap pr-3 text-amber-800">Domingos</p>
                <div className="divider divider-end w-full">8:00 a.m - 7:00 p.m</div>
            </div>
        </div>
    )
}

export default Horarios;
