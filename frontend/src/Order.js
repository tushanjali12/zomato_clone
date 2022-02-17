import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Order() {
     const history = useHistory();
    const [username, setUserName] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    //const [debitNo, setDebitNo] = useState("");
    const [address, setAddress] = useState("");
    const [verify, setVerify] = useState("");
  
    
    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const orders = {username,name,price,quantity,totalPrice,address};
            axios.post("http://localhost:8056/order/create", orders);
            alert("Your order is placed successfully");
            // setUserName("");
            // setName("");
            //    setPrice("");
            //    setQuantity("");
            //    setTotalPrice("");
               //setDebitNo("");
               //setAddress("");
            console.log(orders);
             history.push("/Payment");
        } catch (error) {
            alert(error);
          
        }
    };

    return (
        <div className="Order">
          
          <div className="box">
            <div>
              <p className="heading">Order</p>
            </div>
            <form className="login_form" onSubmit={handleSubmit} method="post">
              <p className="title">Order Here</p>
              <input
            type="text"
            name="uname"
            className="uname"
            placeholder="User Name"
            autoComplete="off"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="text"
            name="name"
            className="name"
            placeholder="Name"
            autoComplete="off"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            name="price"
            className="price"
            placeholder="Price"
            autoComplete="off"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <input
            type="text"
            name="quantity"
            className="quantity"
            placeholder="Quantity"
            autoComplete="off"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <input
            type="text"
            name="tprice"
            className="totalPrice"
            placeholder={price*quantity}
            autoComplete="off"
            value={totalPrice}
            onChange={(event) => setTotalPrice(event.target.value)}
          />
          {/* <input
            type="text"
            name="dno"
            className="debitNo"
            placeholder="Debit No"
            autoComplete="off"
            value={debitNo}
            onChange={(event) => setDebitNo(event.target.value)}
          /> */}
          <input
            type="text"
            name="add"
            className="address"
            placeholder="Address"
            autoComplete="off"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <button
            type="submit"
            className="submit_button"
            // onClick={handleSubmit}
          >
            Order
            </button>
        </form>
      </div>
      
    </div>
  );
}

export default Order;
    

        