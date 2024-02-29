import React from "react";

function Mapa() {
    return (
        <div style={{ height: "400px", width: "100%", position: "relative" }}>
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1545.7137372815332!2d-69.95060343763876!3d18.480364599478513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89480d917fa9%3A0x339102f9d9866c0b!2sD&#39;RAFA%20PELUQUER%C3%8DA%20EL%20DON%20DEL%20CORTE!5e0!3m2!1sen!2sdo!4v1709170496582!5m2!1sen!2sdo"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default Mapa;
