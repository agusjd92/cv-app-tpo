import React from "react";
import "./styles.css";



const Footer = () => {
  return (
  
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-5 col-md-6">
            <h6>About</h6>
            <p class="text-justify"> I'm a passionate front-end web developer with extensive experience in creating attractive and functional interfaces. Using my expertise in HTML, CSS, and JavaScript. I love exploring new technologies and staying updated with the latest design and development trends.Let's work together to bring your digital vision to life!.</p>
          </div>
          <div class="col-xs-4 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
            <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/contact">Contact me</a></li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="https://www.facebook.com/agustin.diaz.9047" target="blank">
                  <i class="fa fa-facebook">
                    </i>
                    </a>
              </li>
              <li><a class="twitter" href="https://twitter.com/home?lang=es" target="blank"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="https://outlook.live.com/mail/0/" target="blank"><i class="fa fa-envelope"></i></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/in/agusjd92/" target="blank"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
              <a href="#">JulianAguero & AgustinDiaz</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
