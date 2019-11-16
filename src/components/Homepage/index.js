import React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";

import "./styles.css";

const Homepage = () => {
  return (
    <div className="home">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="content">
        <div className="logo">
          <h1>Workeezy</h1>
          <h3>Trabalho Gamificado</h3>
          <p>
            Gamifique seus processos e decole pelas camadas atmosféricas,
            confira nossos planos.
          </p>
        </div>
        <div className="buttons">
          <Link to="/login">
            <Button
              style={{
                color: "#fff",
                width: "300px",
                height: "35px",
                fontSize: "1.2em",
                fontWeight: "500",
                border: "1px dashed #fff",
                background: "transparent"
              }}
              htmlType="button"
              className="login-form-button"
            >
              Log in
            </Button>
          </Link>
          <Link to="/register">
            <Button
              style={{
                color: "#fff",
                width: "300px",
                height: "35px",
                fontSize: "1.2em",
                fontWeight: "500",
                border: "1px dashed #fff",
                background: "transparent"
              }}
              htmlType="button"
              className="login-form-button"
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
