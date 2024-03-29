import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeName = (event) => {
    const input = event.target.value;
    setFormState({ ...formState, name: input });
  };

  const onChangeMessage = (event) => {
    const input = event.target.value;
    setFormState({ ...formState, message: input });
  };

  const onChangeEmail = (event) => {
    const input = event.target.value;
    setFormState({ ...formState, email: input });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (
      formState.name.length === 0 ||
      formState.email.length === 0 ||
      formState.message.length === 0
    ) {
      alert("Por favor, complete todos los campos.");
    } else if (!validateEmail(formState.email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
    } else {
      axios
        .post("http://localhost:8080/api/message", formState)
        .then((response) => {
          console.log(response.data);
          setFormState({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error(error);
        });
        alert("Mensaje enviado correctamente!")
    }
   
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      return true
    }

    return false;
  };

  return (
    <>
      <section id="contact">
        <h1 class="section-header">Contact me</h1>

        <div class="contact-wrapper">
          <form id="contact-form" class="form-horizontal" role="form">
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  required
                  onChange={onChangeName}
                  value={formState.name}
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value={formState.email}
                  onChange={onChangeEmail}
                  required
                />
              </div>
            </div>

            <textarea
              class="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
              onChange={onChangeMessage}
              value={formState.message}
            ></textarea>

            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
              onClick={handleOnSubmit}
            >
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i>
                <span class="send-text">SEND</span>
              </div>
            </button>
          </form>

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text place">Argentina, Buenos Aires</span>
                </i>
              </li>


              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      Agusjd92@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <ul className="social-media-list">
              <li>
                <a href="https://github.com/agusjd92" target="_blank" className="contact-icon">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://codepen.io/" target="_blank" className="contact-icon">
                  <i className="fa fa-codepen" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/home?lang=es" target="_blank" className="contact-icon">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/agusjd92" target="_blank" class="contact-icon">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>

            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
