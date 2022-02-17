import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Signup.css";

function SignUp() {
   const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const user = { firstName, lastName, email, password };
      const result = axios.post("http://localhost:8683/subs", user);
      alert("You are logged in successfully");
      // setFirstName("");
      // setLastName("");
      //    setEmail("");
      //    setPassword("");
      console.log(user);
       history.push("/Homepage");
    } catch (error) {
      alert(error);
    }
  };

  

  return (
    <div className="SignUp">
      
      <div className="box">
        <div>
          <p className="heading">Signup</p>
        </div>
        <form className="login_form" onSubmit={handleSubmit} method="post">
          <p className="title">Zomato</p>
          <input
            type="text"
            name="fname"
            className="fname"
            placeholder="First Name"
            required="required"
            autoComplete="off"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type="text"
            name="lname"
            className="lname"
            placeholder="Last Name"
            required="required"
            autoComplete="off"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Email"
            required="required"
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            name="password"
            className="password"
            placeholder="Password"
            required="required"
            autoComplete="off"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          
          <button
            type="submit"
            className="submit_button"
            // onClick={handleSubmit}
          >
            Sign up
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default SignUp;

