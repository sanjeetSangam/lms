import React, { useEffect, useState } from "react";
import { Logo } from "../components/Logo";
import "../styles/login.css";
import { auth } from "../firebase/firebaseMain";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";
import axios from "axios";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const [country, setCountry] = useState(null);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const getData = async () => {
    const { data } = await axios.get("https://geolocation-db.com/json/");
    setCountry(data.country_name);
  };

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("lmslogin"));
    const admin = JSON.parse(localStorage.getItem("adminlms"));
    if (loggedUser) {
      navigate("/");
    } else if (admin) {
      navigate("/admin");
    }

    getData();
  }, []);

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email && password) {
      try {
        let { user } = await auth.signInWithEmailAndPassword(email, password);
        let userData = {
          email: user.email,
        };
        localStorage.setItem("lmslogin", JSON.stringify(userData));
        dispatch(addUser(userData));
        setLoading(false);
        navigate("/");
      } catch (error) {
        toast.error(error.message, toastOptions);
        setLoading(false);
      }
    } else {
      toast.error("Please fill details", toastOptions);
      setLoading(false);
    }
  };

  const adminSign = async (e) => {
    e.preventDefault();

    setAdminLoading(true);

    if (country === "India") {
      if (email && password) {
        try {
          let { user } = await auth.signInWithEmailAndPassword(email, password);
          let userData = {
            email: user.email,
          };
          localStorage.setItem("adminlms", JSON.stringify(userData));
          dispatch(addUser(userData));
          setAdminLoading(false);
          navigate("/");
        } catch (error) {
          toast.error(error.message, toastOptions);
          setAdminLoading(false);
        }
      } else {
        toast.error("Please fill details", toastOptions);
        setAdminLoading(false);
      }
    } else {
      toast.error("Admin not from INDIA and not authorized", toastOptions);
      setAdminLoading(false);
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
            <form action="">
              <label>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={signIn} type="button">
                {loading ? <CircularProgress /> : "Login"}
              </button>
              <div className="form admin">
                <button type="button" onClick={adminSign}>
                  {adminLoading ? "Checking User..." : "Login as Admin"}
                </button>
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
