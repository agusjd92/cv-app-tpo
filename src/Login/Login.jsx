import React, { useState } from "react";
import "./styles.css";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

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
    // Aquí solo mostraré un mensaje simple.
    return <Dashboard />;
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

function Dashboard() {
  return (
    <div>
  
      <div className="container-table">
        
        <div className="container-table-son">
        <h1 className="title-table">Bienvenido al Dashboard</h1>
        <MDBTable>
          <MDBTableHead dark>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Mail</th>
              <th scope='col'>Mensaje</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto@Gmail.com</td>
              <td>Que onda perro</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Jacob</td>
              <td>Thornton@yahoo.com</td>
              <td>Boca boca boca boca boca</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Larry</td>
              <td>theBird@hotmail.com</td>
              <td>Albion Online es un MMORPG desarrollado por Sandbox Interactive. Es un juego no lineal que te permite crear tu propia historia sin estar </td>
            </tr>
          </MDBTableBody>
        </MDBTable>

        </div>
      </div>
    </div>
  );
}

export default Login;
