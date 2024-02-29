import React from "react";



function Producto({nombre="Producto", urlimg="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", descripcion="If a dog chews shoes whose shoes does he choose?"}) {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src={urlimg}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{nombre}</h2>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}

export default Producto;
