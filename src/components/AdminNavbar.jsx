import React from "react";
import { useSelector } from "react-redux";
import { Logo } from "./Logo";
import { Logout } from "./Logout";

export const AdminNavbar = () => {
  const user = useSelector((store) => store.user);
  console.log(user.profileUrl);
  return (
    <nav className="admin__nav">
      <div className="logo">
        <Logo />
      </div>

      <div className="user__admin">
        <img src={"user?.profileUrl"} alt="admin" />
        {user?.name} <Logout userType={"adminlms"} />
      </div>
    </nav>
  );
};
