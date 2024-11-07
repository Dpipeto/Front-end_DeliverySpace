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
                <div>
                    <h2>Our Company</h2>
                    <h4>El motivo de esta empresa es dar una ayuda al seguimiento de paqueteria bajo el contexto de la logistica y cadena de suministro</h4>
                </div>    
                <h2>Our Services</h2>
                <h4></h4>
                <h4></h4>
                <h4></h4>
   
        </nav>    
    )
}  
export default Principal;