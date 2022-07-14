import React, { useEffect } from "react";
import { Logo } from "./Logo";
import "../styles/nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/action";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Logout } from "./Logout";

export const Navbar = () => {
  let user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.email) {
      const loggedUser = JSON.parse(localStorage.getItem("lmsLogin"));
      dispatch(addUser(loggedUser));
    }
  }, []);

  const signOut = () => {
    localStorage.removeItem("lmsLogin");
    navigate("/login");
  };

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
          <p>{user?.email}</p>
          <Logout userType={"lmsLogin"} />
        </div>
      </div>
    </nav>
  );
};
