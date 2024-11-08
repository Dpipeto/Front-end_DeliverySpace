import React from "react";
import Login from './Login/Login'
import './Principal.css'
import { Link, useNavigate } from "react-router-dom";

const Principal = () => {

    const navigate = useNavigate()
    const handlerFormSubmit = async(e) => {
        e.preventDefault();
        setTimeout(() => {
            navigate("/");
        });
    }
    return (
        <nav>
            <div className="navbar">
                <div className="dropdown-container">
                    <button className="tracking-button" type="submit">Tracking</button>
                    <button className="tracking-button" type="submit">Account</button>
                </div>
                <div onSubmit={handlerFormSubmit} className="auth-container">
                    <button className="login-button" type="submit"><Link to='/Login'>Login</Link></button>
                    <button className="login-button" type="submit"><Link to='/Register'>Register</Link></button>
                </div>
            </div>
                <div className="homeText">
                    <h2>¡Bienvenidos a nuestra plataforma!</h2>
                    <p>
                    Nos dedicamos a ofrecer un servicio completo y eficiente para el seguimiento de sus envíos, optimizando la gestión de órdenes bajo el contexto de la logística y la cadena de suministro.
                    <br />
                    Nuestra misión es asegurar que cada paquete llegue a su destino con rapidez, seguridad y visibilidad en tiempo real. Confíe en nosotros para un envío fácil y confiable, adaptado a sus necesidades logísticas.
                    </p>
                    <h3><i class='bx bx-package' ></i>Rápida gestión de envíos</h3>
                    <p>Ofrecemos una plataforma eficiente para gestionar todos tus envíos en tiempo real.</p>

                    <h3><i class='bx bx-map-pin' ></i>Visibilidad completa</h3>
                    <p>Puedes seguir el estado de tus paquetes en cada etapa del proceso, con notificaciones al instante.</p>

                    <h3> <i class='bx bxs-truck'></i> Servicio confiable</h3>
                    <p>Nos comprometemos a entregar tus paquetes con seguridad, asegurando que lleguen a su destino sin contratiempos.</p>
                </div>    
   
        </nav>    
    )
}  
export default Principal;