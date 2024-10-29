import React, { useState, useEffect } from "react";
import './Login.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import axiosClient from "../../Config/axios";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../Components/Message";


const Login = () => {

    const navigate = useNavigate()
    const [dataForm, setDataForm] = useState({
        email:"",
        password:""
    })

    const [message, setMessage] = useState({})

    const handlerFormSubmit = async(e) => {
        e.preventDefault();
        try {
            const dataUrl = new URLSearchParams (dataForm).toString();
            const response = await axiosClient.post(`/User/login?${dataUrl}`);
            console.log(response.data.message);
            setMessage({text: response.data.message, variant:"success"})
            setTimeout(() => {
                navigate("/Orders");
            },2000);
            
        } catch (error) {
            if (error.response.data.message) {
                console.log(error);
                // setMessage({ text: error.response.data.message, variant: "danger" })
                setMessage({ text: "Contraseña Incorrecta", variant: "danger" })
            } else {
                console.log(error);
                // setMessage({ text: error.response.data, variant: "danger" })
                setMessage({ text: "Usuario no encontrado!", variant: "danger" })

            }
        }
    }

    const handlerOnChange = (e) => {
        setDataForm({...dataForm, [e.target.name]:e.target.value})
        console.log(dataForm);
    }
    
    return (
        <div className='wrapper'>
            <form onSubmit={handlerFormSubmit} action="">
                <h1>SpaceDelivery</h1>
                <div className="input-box">
                    <MdEmail className='icon' />
                    <input name="email" onChange={handlerOnChange} type="email" placeholder='Email' required/>
                </div>
                <div className="input-box">
                    <FaLock className='icon' />
                    <input name="password" onChange={handlerOnChange} type="password" placeholder='Password' required/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <Link to='/Register'>Register</Link></p>
                </div>
                {message.text && <Message message={message} />}
            </form>
        </div>
    );
};

export default Login;