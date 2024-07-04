import React, { useState } from "react";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  function ff() {
    alert("ok");
    setEmail("");
    setPassword("");
    // setN(Name)
  }

  return (
    <>
    <h1 className="h1-design">Sign in </h1>
    <div className="form-container">
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="password-container">
        <label htmlFor="password">Password:</label>
        <input
          type={passwordVisible ? "text" : "password"}
          id="pwd"
          name="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <button type="submit" onClick={ff}>
        Submit
      </button>
    </div> </>
  );
}

export default Signin;
