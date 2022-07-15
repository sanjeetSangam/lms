import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { Logout } from "./Logout";
import "../styles/admin.css";
import { addUser } from "../redux/action";

export const AdminNavbar = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let activestyle = {
    color: "#2b3036",
    cursor: "pointer",
    fontWeight : "bold",
    borderBottom: "1.2px solid #52575f",
  };

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("adminlms"));
    if (admin) {
      dispatch(addUser(admin));
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <nav className="admin__nav">
      <div className="nav__container">
        <div className="logo">
          <Logo />
        </div>

        <div className="menus__admin">
          <ul>
            <NavLink
              to="/admin/lecture"
              style={({ isActive }) => (isActive ? activestyle : undefined)}
            >
              <li>Lectures</li>
            </NavLink>

            <NavLink
              to="/admin/assignment"
              style={({ isActive }) => (isActive ? activestyle : undefined)}
            >
              <li>Assignments</li>
            </NavLink>
          </ul>
        </div>

        <div className="user__admin">
          {user?.email} <Logout userType={"adminlms"} />
        </div>
      </div>
    </nav>
  );
};
