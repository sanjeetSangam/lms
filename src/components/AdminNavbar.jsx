import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { Logout } from "./Logout";
import "../styles/admin.css";
import { addUser } from "../redux/action";

export const AdminNavbar = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
