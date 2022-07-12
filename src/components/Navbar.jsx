import React from "react";
import { Logo } from "./Logo";
import "../styles/nav.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="logo__menu">
          <Logo />
          <ul>
            <li>Lectures</li>
            <li>Assignments</li>
            <li>Quizzes</li>
            <li>Tickets</li>
            <li>Discussions</li>
            <li>Notifications</li>
            <li>Electives</li>
          </ul>
        </div>

        <div className="username">
          <p>Sanjeet Kumar Sangam (fw13_175)</p>
        </div>
      </div>

      <hr />
    </nav>
  );
};
