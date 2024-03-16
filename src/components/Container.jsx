import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MainReservar from './MainReservar';
import MainProducts from './MainProducts';

function Container() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Reservar" element={<MainReservar/>} />
                <Route path="/Productos" element={<MainProducts/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Container;
