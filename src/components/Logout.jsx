import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Logout = ({ userType }) => {
  const navigate = useNavigate();
  const signout = () => {
    localStorage.removeItem(userType);
    navigate("/login");
  };
  return (
    <button className="logout" onClick={signout}>
      <AiOutlinePoweroff />
    </button>
  );
};
