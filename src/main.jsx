import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Galeria from "./components/Galeria.jsx";
import Services from "./components/Services.jsx";
import Contactos from "./components/Contactos.jsx";
import Footer from "./components/Footer.jsx";
import Reservar from "./components/mainReservar.jsx"; // Importa el componente Reservas

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <React.StrictMode>
            <Nav />
            <Switch>
                <Route path="/" exact>
                    <Hero />
                    <About />
                    <Galeria />
                    <Services />
                    <Contactos />
                    <Footer />
                </Route>
                <Route path="/reservar">
                    <Reservar />
                </Route>
            </Switch>
        </React.StrictMode>
    </Router>
);
