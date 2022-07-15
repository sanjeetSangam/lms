import React, { useEffect } from "react";
import { Logo } from "./Logo";
import "../styles/nav.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/action";
import { Logout } from "./Logout";

export const Navbar = () => {
  let user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  let activestyle = {
    color: "#2b3036",
    cursor: "pointer",
    fontWeight: "bold",
    borderBottom: "1.2px solid #52575f",
  };

  useEffect(() => {
    if (!user?.email) {
      const loggedUser = JSON.parse(localStorage.getItem("lmslogin"));
      dispatch(addUser(loggedUser));
    }
  }, []);

  return (
    <nav>
      <div className="nav__container">
        <div className="logo__menu">
          <Link to="/">
            <Logo />
          </Link>

          <ul>
            <NavLink
              to="/lectures"
              style={({ isActive }) => (isActive ? activestyle : undefined)}
            >
              <li>Lectures</li>
            </NavLink>
            <NavLink
              to="/assignments"
              style={({ isActive }) => (isActive ? activestyle : undefined)}
            >
              <li>Assignments</li>
            </NavLink>
            <NavLink to="/">
              <li>Quizzes</li>
            </NavLink>
            <NavLink to="/">
              <li>Tickets</li>
            </NavLink>
            <NavLink to="/">
              <li>Discussions</li>
            </NavLink>
            <NavLink to="/">
              <li>Notifications</li>
            </NavLink>
            <NavLink to="/">
              <li>Electives</li>
            </NavLink>
          </ul>
        </div>

        <div className="username">
          <p>{user?.email}</p>
          <Logout userType={"lmslogin"} />
        </div>
      </div>
    </nav>
  );
};
