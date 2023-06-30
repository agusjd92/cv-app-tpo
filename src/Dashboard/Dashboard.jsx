import React, { useEffect, useState } from "react";
import "./styles.css";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";

const Dashboard = () => {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/message")
      .then((response) => {
        // Manejar la respuesta exitosa
        setMessages(response.data.messages);
      })
      .catch((error) => {
        // Manejar los errores
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="container-table">
        <div className="container-table-son">
          <h1 className="title-table">Bienvenido al Dashboard</h1>
          <MDBTable>
            <MDBTableHead dark>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Mail</th>
                <th scope="col">Mensaje</th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              {messages?.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
