import React, { useState } from "react";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons from react-icons

function Register() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [N, setN] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  function ff() {
    if( Password !== ConfirmPassword){
        alert ( "KO")
    }
    else
    {
    alert("ok");
    setName("");
    setPassword("")
    setConfirmPassword("")
    setEmail("")
    // setN(Name)
}}

  function handleOnChange(event) {
    setName(event.target.value);
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <>
    <h1 className="h1-design">Register for Your Account</h1>

    <div className="form-container">
      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={Name}
          onChange={handleOnChange}
        />
      </div>
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
      <div className="password-container">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type={confirmPasswordVisible ? "text" : "password"}
          id="pwd1"
          name="confirmPassword"
          value={ConfirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="button"
          className="toggle-password"
          onClick={toggleConfirmPasswordVisibility}
        >
          {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <button type="submit" onClick={ff}>Submit</button>
    </div>
    </>);
}

export default Register;
