import React from "react";
import callicon from '../../assets/iconos/phone-svgrepo-com.svg';
function BotonContactar({url, texto="Contáctenos"}) {
    return (
        <a href={url} className="btn btn-primary flex gap-0  px-5 pl-3 font-bold w-fit mx-auto"><img src={callicon} alt="call icon" className="w-h-8 h-8 m-0" />{texto}</a>
    )
}

export default BotonContactar;
