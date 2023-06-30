import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí puedes realizar la validación de las credenciales ingresadas.
    // Por simplicidad, aquí asumiremos que el inicio de sesión es exitoso si el usuario ingresa "admin" como nombre de usuario y "password" como contraseña.
    if (username === "agus" && password === "123") {
      setLoggedIn(true);
    } else {
      alert("Credenciales inválidas");
    }
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
