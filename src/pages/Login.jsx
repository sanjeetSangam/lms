import React, { useEffect } from "react";
import { Logo } from "../components/Logo";
import "../styles/login.css";
import { auth, provider } from "../firebase/firebaseMain";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const adminSign = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let userData = {
          name: result.user.displayName,
          email: result.user.email,
          profileUrl: result.user.photoURL,
        };

        if (userData.name === "Sanjeet Kumar Sangam") {
          dispatch(addUser(userData));
          localStorage.setItem("adminlms", JSON.stringify(userData));
          navigate("/admin");
        } else {
          toast.error("User not registed as admin", toastOptions);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
              <input type="text" />
              <label>Password</label>
              <input type="text" />
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
