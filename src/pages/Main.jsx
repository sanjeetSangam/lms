import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Admin } from "./Admin";
import { Assignments } from "./Assignments";
import { Home } from "./Home";
import { Lectures } from "./Lectures";

export const Main = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="lectures" element={<Lectures />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};
