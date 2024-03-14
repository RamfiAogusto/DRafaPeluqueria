import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Productos/Nav.jsx";
import Footer from "./components/Productos/Footer.jsx";
import Tabs from "./components/Productos/Tabs.jsx";

ReactDOM.createRoot(document.getElementById("rootProducts")).render(
    <React.StrictMode>
        <Nav />
        <br />
        <br />
        <br />
        <Tabs />
        <Footer />
    </React.StrictMode>
);