import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AdminLecture } from "../components/AdminLecture";
import { AdminNavbar } from "../components/AdminNavbar";
import { addUser } from "../redux/action";


export const Admin = () => {


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
