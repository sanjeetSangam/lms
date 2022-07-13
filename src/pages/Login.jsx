import React from "react";
import { Logo } from "../components/Logo";
import "../styles/login.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="login__box">
        <div className="logo__login">
          <Logo />
        </div>

        <div className="form">
          <button>Login with Google</button>
        </div>
      </div>
    </div>
  );
};
