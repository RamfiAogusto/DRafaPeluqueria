import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="navbar bg-base-100 fixed z-10 font-semibold">
            <div className="navbar-start">
            <Link to="/" className="btn btn-ghost text-xl">D'Rafa Peluquería</Link>
            </div>

            

        </div>
    );
}

export default Nav;
