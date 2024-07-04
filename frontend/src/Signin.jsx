import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import "./Register.css"; // Assuming you have a CSS file for styling

const poolData = {
  UserPoolId: "eu-central-1_u1EUpgENY", // Replace with your User Pool ID
  ClientId: "34b76ra579e5682vh0mjju3pud", // Replace with your App Client ID
};

const userPool = new CognitoUserPool(poolData);

function Signin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSignIn = async () => {
    const authenticationData = {
      Username: Email,
      Password: Password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: Email,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log("Authentication success:", result);
        alert("Login successful!");
        // Redirect or perform actions after successful login
      },
      onFailure: (err) => {
        console.error("Authentication failure:", err);
        alert(err.message || JSON.stringify(err));
      },
    });
  };

  return (
    <>
      <h1 className="h1-design">Sign In to Your Account</h1>
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
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </>
  );
}

export default Signin;
