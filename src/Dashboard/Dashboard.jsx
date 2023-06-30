import React, { useState } from "react";
import "./styles.css";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const Dashboard = () => {

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
    
export default Dashboard;