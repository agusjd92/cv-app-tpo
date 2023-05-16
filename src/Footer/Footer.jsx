import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div class="logo"></div>
      <div>
        <p>Developed</p>
        <ul>
          <li>
            <a href="https://github.com/agusjd">
              <img src="../images/github2.png" alt="" class="socialIcon" />
            </a>
          </li>
          <li>
            <a href="https://wa.link/47utbs" target="blank">
              <img src="../images/whatsapp.png" alt="" class="socialIcon" />
            </a>
          </li>
          <li>
            <a href="mailto:agusjd92@gmail.com">
              <img src="../images/mail.png" alt="" class="socialIcon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/agusjd92/" target="blank">
              <img src="../images/linkedin.png" alt="" class="socialIcon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
