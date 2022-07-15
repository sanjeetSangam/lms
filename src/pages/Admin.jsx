import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AdminLecture } from "../components/AdminLecture";
import { AdminNavbar } from "../components/AdminNavbar";
import { addUser } from "../redux/action";


export const Admin = () => {
  // const user = useSelector((store) => store.user);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    // const admin = JSON.parse(localStorage.getItem("adminlms"));
    // if (admin) {
    //   dispatch(addUser(admin));
    // } else {
    //   navigate("/login");
    // }
  }, []);

  return (
    <div className="container">
      
      <section>
        <Routes>
          <Route path="lecture" element={<AdminLecture />} />
        </Routes>
      </section>
    </div>
  );
};
