import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Logout } from "./Logout";
import "../styles/admin.css";

export const AdminNavbar = () => {
  const user = useSelector((store) => store.user);
  return (
    <nav className="admin__nav">
      <div className="nav__container">
        <div className="logo">
          <Logo />
        </div>

        <div className="menus__admin">
          <ul>
            <Link to="/admin/lecture">
              <li>Lectures</li>
            </Link>

            <Link to="/admin/assignment">
              <li>Assignments</li>
            </Link>
          </ul>
        </div>

        <div className="user__admin">
          {user?.email} <Logout userType={"adminlms"} />
        </div>
      </div>
    </nav>
  );
};
