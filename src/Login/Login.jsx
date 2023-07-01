import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("http://localhost:8080/api/login", {
        userId: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.error(error);
        setLoggedIn(false)
        alert("Credenciales invalidas")
      });
  };

  if (isLoggedIn) {
    // Si el inicio de sesión fue exitoso, puedes redirigir a otra página o mostrar el contenido deseado.

    navigate("/dashboard");
  }

  return (
    <div className="full-login">
      <div className="content-container">
        <div className="login-form-container">
          <div className="login-form-box">
            <div className="login-form">
              <p className="login-form-title">Login</p>
              <div className="flex-wrapper-one">
                <div className="flex-wrapper-two">
                  <div className="input-input">
                    <input
                      className="input"
                      placeholder="User"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="input-input">
                    <input
                      className="input"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button className="login-btn" onClick={handleLogin}>
                  <p className="btn-text">Enter</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
