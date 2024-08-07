import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.css"; // Import your CSS file

const poolData = {
    UserPoolId: "eu-central-1_u1EUpgENY", // Replace with your User Pool ID
    ClientId: "34b76ra579e5682vh0mjju3pud", // Replace with your App Client ID
};

const userPool = new CognitoUserPool(poolData);

function Register({ setUser, onRequestClose }) { // Accept setUser and onRequestClose as props
    const navigate = useNavigate(); // Initialize useNavigate
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [ConfirmationCode, setConfirmationCode] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleRegister = async () => {
        try {
            if (Password !== ConfirmPassword) {
                alert("Passwords do not match");
                return;
            }

            const attributeList = [];
            const dataEmail = {
                Name: "email",
                Value: Email,
            };
            const attributeEmail = new CognitoUserAttribute(dataEmail);
            attributeList.push(attributeEmail);

            userPool.signUp(Name, Password, attributeList, null, function (err, result) {
                if (err) {
                    console.error("Error signing up:", err);
                    alert(err.message || JSON.stringify(err));
                    return;
                }
                console.log("Sign up success:", result);
                alert("Registration successful! Please check your email for verification code.");
                alert("Please enter your confirmation code to proceed");
            });
        } catch (error) {
            console.error("Error signing up:", error);
            alert("Registration failed. Please try again.");
        }
    };

    const handleConfirmation = () => {
        const userData = {
            Username: Name,
            Pool: userPool,
        };
        const cognitoUser = new CognitoUser(userData);

        cognitoUser.confirmRegistration(ConfirmationCode, true, function (err, result) {
            if (err) {
                console.error("Error confirming registration:", err);
                if (err.code === 'ExpiredCodeException') {
                    alert("Confirmation code expired. Please request a new code.");
                } else if (err.code === 'InvalidParameterException' && err.message.includes('token used too late')) {
                    alert("The confirmation code might be expired due to incorrect time synchronization. Please request a new code.");
                } else {
                    alert(err.message || JSON.stringify(err));
                }
                return;
            }
            console.log("Confirmation success:", result);
            alert("Registration confirmed successfully!");
            setUser(Name);
            onRequestClose(); // Close the modal
            navigate('/');
        });
    };

    const handleResendCode = () => {
        const userData = {
            Username: Email,
            Pool: userPool,
        };
        const cognitoUser = new CognitoUser(userData);

        cognitoUser.resendConfirmationCode(function (err, result) {
            if (err) {
                console.error("Error resending confirmation code:", err);
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log("Resend code success:", result);
            alert("A new confirmation code has been sent to your email.");
        });
    };

    return (
        <div className="register-modal">
            <div className="form-container">
            <h1 className="h1-design">Register for your account</h1>
                <div className="input-container">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
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
                <div className="input-container">
                    <label htmlFor="password">
                        Password:
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </label>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="confirmPassword">
                        Confirm Password:
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </label>
                    <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleRegister}>
                    Submit
                </button>
            </div>

            <div className="confirmation-container">
                <input
                    type="text"
                    value={ConfirmationCode}
                    onChange={(e) => setConfirmationCode(e.target.value)}
                    placeholder="Enter confirmation code"
                />
                <button onClick={handleConfirmation}>Confirm</button>
            </div>
        </div>
    );
}

export default Register;
