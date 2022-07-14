import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Logo } from "../components/Logo";
import { auth } from "../firebase/firebaseMain";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const signUp = async (e) => {
    e.preventDefault();
    if (email && password && cpassword) {
      if (password === cpassword) {
        try {
          const res = await auth.createUserWithEmailAndPassword(
            email,
            password
          );

          if (res) {
            navigate("/login");
          }
        } catch (er) {
          toast.error(er.message, toastOptions);
        }
      } else {
        toast.error("Password not matched", toastOptions);
      }
    } else {
      toast.error("Please fill all credentials", toastOptions);
    }
  };
  return (
    <>
      <div className="login">
        <div className="login__box">
          <div className="logo__login">
            <Logo />
          </div>

          <div className="form">
            <form action="" onSubmit={signUp}>
              <label>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Confirm Password</label>
              <input
                type="password"
                onChange={(e) => setCPassword(e.target.value)}
              />
              <button>Register</button>
            </form>
          </div>

          <div className="registerForm">
            <p>
              Already have account!{" "}
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
