import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminNavbar } from "../components/AdminNavbar";
import { addUser } from "../redux/action";
import "../styles/admin.css"

export const Admin = () => {
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
    <div className="container">
      <AdminNavbar />
      <section>ADMIN</section>
    </div>
  );
};
