import React, { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import "../styles/login.css";
import { auth, db, provider } from "../firebase/firebaseMain";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("lmsLogin"));
    const admin = JSON.parse(localStorage.getItem("adminlms"));
    if (loggedUser) {
      navigate("/");
    } else if (admin) {
      navigate("/admin");
    }
  }, []);

  const signIn = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        let { user } = await auth.signInWithEmailAndPassword(email, password);
        let userData = {
          email: user.email,
        };
        localStorage.setItem("lmslogin", JSON.stringify(userData));
        dispatch(addUser(userData));
        navigate("/");
      } catch (error) {
        toast.error(error.message, toastOptions);
      }
    } else {
      toast.error("Please fill details", toastOptions);
    }
  };

  const adminSign = () => {
    toast("Not implemented yet! Please be patient");
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     let userData = {
    //       name: result.user.displayName,
    //       email: result.user.email,
    //       profileUrl: result.user.photoURL,
    //     };

    //     if (userData.name === "Sanjeet Kumar Sangam") {
    //       dispatch(addUser(userData));
    //       localStorage.setItem("adminlms", JSON.stringify(userData));
    //       navigate("/admin");
    //     } else {
    //       toast.error("User not registed as admin", toastOptions);
    //     }
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
  };

  return (
    <>
      <div className="login">
        <div className="login__box">
          <div className="logo__login">
            <Logo />
          </div>

          <div className="form">
            <form action="" onSubmit={signIn}>
              <label>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button>Login</button>
              <div className="form admin">
                <button onClick={adminSign}>Login as Admin</button>
              </div>
            </form>
          </div>

          <div className="registerForm">
            <p>
              No account!{" "}
              <span
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
