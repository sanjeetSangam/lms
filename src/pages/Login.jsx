import React from "react";
import { Logo } from "../components/Logo";
import "../styles/login.css";
import { auth, provider } from "../firebase/firebaseMain";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let userData = {
          name: result.user.displayName,
          email: result.user.email,
          profileUrl: result.user.photoURL,
        };
        dispatch(addUser(userData));
        localStorage.setItem("lmsLogin", JSON.stringify(userData));
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__box">
        <div className="logo__login">
          <Logo />
        </div>

        <div className="form">
          <button onClick={signIn}>Login with Google</button>
        </div>
      </div>
    </div>
  );
};
