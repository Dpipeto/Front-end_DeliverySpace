import React, { useState } from "react";
import axiosClient from "../Config/axios";

const Orders = () => {

    const [dataForm, setDataForm] = useState({
        typeOrder:"",
        packageSender:"",
        packageReceive:"",
        orderValue:"",
        senderAddress:"",
        senderPhone:"",
        senderEmail:"",
        userId:"",
        orderDetailId:"",
        orderStatusTypeId:""
    })

    const handlerFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataUrl = new URLSearchParams(dataForm).toString();
            const response = await axiosClient.post(`/Order?${dataUrl}`);
            console.log(response);
        } catch (error) {
            console.log("submit")
        }
        console.log("submit");
    }

    const handlerOnChange = (e) => {
        setDataForm({...dataForm, [e.target.name]:e.target.value})
        console.log(response);
    }
    return (
        <div className='wrapper'>
            <form onSubmit={handlerFormSubmit} action="">
                <h1>your order</h1>
                <div className="input-box">
                    <input name="typeOrder" onChange={handlerOnChange} type="text" placeholder='Type order' required/>
                </div>
                <div className="input-box">
                    <input name="packageSender" onChange={handlerOnChange} type="text" placeholder='Package sender' required/>
                </div>
                <div className="input-box">
                    <input name="packageRecieve" onChange={handlerOnChange} type="text" placeholder='package recieve' required/>
                </div>
                <div className="input-box">
                    <input name="orderValue" onChange={handlerOnChange} type="number" placeholder='Order Value' required/>
                </div>
                <div className="input-box">
                    <input name="senderAddress" onChange={handlerOnChange} type="text" placeholder='Sender address' required/>
                </div>
                <div className="input-box">
                    <input name="senderPhone" onChange={handlerOnChange} type="number" placeholder='Sender Phone' required/>
                </div>
                <div className="input-box">
                    <input name="senderEmail" onChange={handlerOnChange} type="email" placeholder='Sender Email' required/>
                </div>
                <div className="input-box">
                    <input name="userId" onChange={handlerOnChange} type="number" placeholder='User ID' required/>
                </div>
                <div className="input-box">
                    <input name="orderDetailId" onChange={handlerOnChange} type="number" placeholder='Order Detail ID' required/>
                </div>
                <div className="input-box">
                    <input name="orderStatusTypeId" onChange={handlerOnChange} type="number" placeholder='Order Status Type ID' required/>
                </div>

                <button type="submit">Place your order</button>
            </form>
        </div>
    );
}

export default Orders;