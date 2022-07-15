import React from "react";
import { useSelector } from "react-redux";
import { Logo } from "./Logo";
import { Logout } from "./Logout";

export const AdminNavbar = () => {
  const user = useSelector((store) => store.user);
  console.log(user.profileUrl);
  return (
    <nav className="admin__nav">
      <div className="nav__container">
        <div className="logo">
          <Logo />
        </div>

        <div className="menus__admin">
          <ul>
            <li>Lectures</li>
            <li>Assignments</li>
          </ul>
        </div>

        <div className="user__admin">
          {user?.email} <Logout userType={"adminlms"} />
        </div>
      </div>
    </nav>
  );
};
