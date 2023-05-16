import React from "react";
import "./styles.css";

const Login = () => {
  return (
    <>
      <div class="full-login">
        <div class="content-container">
          <div class="login-form-container">
            <div class="login-form-box">
              <div class="login-form">
                <p class="login-form-title">Login</p>
                <div class="flex-wrapper-one">
                  <div class="flex-wrapper-two">
                    <div class="input-input">
                      <input class="input" placeholder="User" />
                    </div>
                    <div class="input-input">
                      <input class="input" placeholder="Password" />
                    </div>
                  </div>
                  <button class="login-btn">
                    <p class="btn-text">Enter</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
