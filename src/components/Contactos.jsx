import React from "react";
import Redes_cont from "./Redes_cont";
import Mapa from "./Mapa";

function Contactos() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse w-full">
                <div className="text-center lg:text-left w-8/12">
                    <Redes_cont />
                    <Mapa />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="Name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mensaje</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered min-h-28"
                                placeholder="Mensaje"
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contactos;
