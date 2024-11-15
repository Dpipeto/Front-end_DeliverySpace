import React, { useState, useEffect } from "react";
import axiosClient from "../../Config/axios";
import { FaUser, FaLock, FaPhone, FaAddressCard } from "react-icons/fa";
import { MdEmail, MdDateRange } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
    const [userType, setUserType] = useState([]);
    const [dataForm, setDataForm] = useState({
        first_Name: "",
        last_Name: "",
        username: "",
        email: "",
        password: "",
        address: "",
        phone: "",
        iD_Document: "",
        date: "",
        userTypesId: ""
    });
    const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);

    useEffect(() => {
        const getUserType = async () => {
            try {
                const userTypes = await axiosClient.get("/UserType");
                console.log(userTypes);
                setUserType(userTypes.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUserType();
    }, []);

    const listUserType = userType.map(userType => (
        <option className="text-black" value={userType.id} key={userType.id}>{userType.userType}</option>
    ));

    const handlerFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataUrl = new URLSearchParams(dataForm).toString();
            const response = await axiosClient.post(`/User?${dataUrl}`);
            console.log(response);
        } catch (error) {
            console.log(error)
        }
        console.log("submit");
    };

    const handlerOnChange = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
        console.log(dataForm);
    };

    const handlePolicyCheckbox = (e) => {
        setIsPolicyAccepted(e.target.checked);
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handlerFormSubmit}>
                <h1>Register</h1>
                <div className="input-box">
                    <FaUser className='icon' />
                    <input name="first_Name" onChange={handlerOnChange} type="text" placeholder='First name' required />
                </div>
                <div className="input-box">
                    <FaUser className='icon' />
                    <input name="last_Name" onChange={handlerOnChange} type="text" placeholder='Last Name' required />
                </div>
                <div className="input-box">
                    <FaUser className='icon' />
                    <input name="username" onChange={handlerOnChange} type="text" placeholder='Username' required />
                </div>
                <div className="input-box">
                    <MdEmail className='icon' />
                    <input name="email" onChange={handlerOnChange} type="email" placeholder='Email' required />
                </div>
                <div className="input-box">
                    <FaLock className='icon' />
                    <input name="password" onChange={handlerOnChange} type="password" placeholder='Password' required />
                </div>
                <div className="input-box">
                    <FaHouse className='icon' />
                    <input name="address" onChange={handlerOnChange} type="text" placeholder='Address' required />
                </div>
                <div className="input-box">
                    <FaPhone className='icon' />
                    <input name="phone" onChange={handlerOnChange} type="number" placeholder='Phone' required />
                </div>
                <div className="input-box">
                    <FaAddressCard className='icon' />
                    <input name="iD_Document" onChange={handlerOnChange} type="number" placeholder='ID Document' required />
                </div>
                <div className="input-box">
                    <MdDateRange className='icon' />
                    <input name="date" onChange={handlerOnChange} type="date" placeholder='Date' required />
                </div>
                <div className="input-box">
                    <select className="selectForm" name="userTypesId" onChange={handlerOnChange} value={dataForm.userTypesId} required>
                        <option className="text-black" value="" disabled>Selecciona un tipo de usuario</option>
                        {listUserType}
                    </select>
                </div>

                <div className="input-box">
                    <label>
                        <input type="checkbox" checked={isPolicyAccepted} onChange={handlePolicyCheckbox} />
                        Acepto la <a href="/src/assets/Política_de_Tratamiento_de_Datos_Personales.pdf" target="_blank" rel="noopener noreferrer">Política de tratamiento de datos</a>
                    </label>
                </div>

                <button type="submit" disabled={!isPolicyAccepted}>Register</button>

                <div className="register-link">
                    <p>¿Ya tienes una cuenta? <Link to='/'>Iniciar sesión</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;
