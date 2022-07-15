import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HomeCard } from "../components/HomeCard";
import { Navbar } from "../components/Navbar";
import { addUser } from "../redux/action";
import "../styles/home.css";

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
    <div className="container home">
      <Navbar />

      <div className="title">
        <section>
          <h2>Today's Schedule</h2>

          <div className="home__buttons">
            <button>BOOKMARKS</button>
            <button>REFER & EARN</button>
          </div>
        </section>
      </div>

      <section className="homeCont" >
        <HomeCard />
      </section>
    </div>
  );
};
