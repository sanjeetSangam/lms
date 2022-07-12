import React from "react";
import { Logo } from "./Logo";
import "../styles/nav.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo__menu">
        <Logo />
      </div>
    </nav>
  );
};
