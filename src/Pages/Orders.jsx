import React from "react";

const Orders = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>your order</h1>
                <div className="input-box">
                    <input name="typeOrder" type="string" placeholder='Type name' required/>
                </div>
                <div className="input-box">
                    <input name="packageSender" type="string" placeholder='Package sender' required/>
                </div>
                <div className="input-box">
                    <input name="packageRecieve" type="string" placeholder='package recieve' required/>
                </div>
                <div className="input-box">
                    <input name="orderValue" type="number" placeholder='Order Value' required/>
                </div>
                <div className="input-box">
                    <input name="senderAddress" type="text" placeholder='Sender address' required/>
                </div>
                <div className="input-box">
                    <input name="senderPhone" type="text" placeholder='Sender Phone' required/>
                </div>
                <div className="input-box">
                    <input name="senderEmail" type="email" placeholder='Sender Email' required/>
                </div>
                <div className="input-box">
                    <input name="userId" type="number" placeholder='User ID' required/>
                </div>
                <div className="input-box">
                    <input name="orderDetailId" type="number" placeholder='Order Detail ID' required/>
                </div>
                <div className="input-box">
                    <input name="orderStatusTypeId" type="number" placeholder='Order Status Type ID' required/>
                </div>

                <button type="submit">Place your order</button>
            </form>
        </div>
    );
}

export default Orders;