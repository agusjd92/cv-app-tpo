import React, { useEffect, useState } from "react";
import "./styles.css";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/message")
      .then((response) => {
        setMessages(response.data.messages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    setMessages((prevMessages) => {
      return prevMessages.filter((item) => item._id !== id);
    });
    axios
      .delete(`http://localhost:8080/api/message?id=${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="container-table">
        <div className="container-table-son">
          <h1 className="title-table">Welcome to the dashboard</h1>
          <MDBTable className="tablita">
            <MDBTableHead dark>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Mail</th>
                <th scope="col">Mensaje</th>
                <th scope="col"></th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              {messages?.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTimes />
                    </button>
                  </td>
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
