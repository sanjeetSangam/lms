import React from "react";
import { Logo } from "./Logo";
import "../styles/nav.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="logo__menu">
          <Link to="/">
            <Logo />
          </Link>

          <ul>
            <Link to="/lectures">
              <li>Lectures</li>
            </Link>
            <Link to="/assignments">
              <li>Assignments</li>
            </Link>
            <Link to="/">
              <li>Quizzes</li>
            </Link>
            <Link to="/">
              <li>Tickets</li>
            </Link>
            <Link to="/">
              <li>Discussions</li>
            </Link>
            <Link to="/">
              <li>Notifications</li>
            </Link>
            <Link to="/">
              <li>Electives</li>
            </Link>
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
