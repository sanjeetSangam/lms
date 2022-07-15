import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { addUser } from "../redux/action";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("lmslogin"));
    if (!loggedUser || !loggedUser.email) {
      navigate("/login");
    } else {
      dispatch(addUser(loggedUser));
      navigate("/");
    }
  }, []);

  return (
    <div className="container">
      <Navbar />
      <section>home</section>
    </div>
  );
};
