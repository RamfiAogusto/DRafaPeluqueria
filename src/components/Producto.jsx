import React from "react";



function Producto({nombre="Producto", urlimg="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", descripcion="", w_img_l="min-w-48", w_img_m="min-w-36"}) {
    return (
        <div className="card card-compact w-min bg-base-100 shadow-xl inline-block mx-1 sm:mx-3">
            <figure>
                <img
                    className={`${w_img_m} sm:${w_img_l} md:${w_img_l} lg:${w_img_l}`}
                    src={urlimg}
                    
                />
            </figure>
            <div className="card-body">
                <h3 className="card-title">{nombre}</h3>
                <p>{descripcion}</p>
            </div>
        </div>
    );
}

export default Producto;
