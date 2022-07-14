import { Routes, Route, useNavigate } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { Assignments } from "./pages/Assignments";
import { Home } from "./pages/Home";
import { Lectures } from "./pages/Lectures";
import { Login } from "./pages/Login";
import { useEffect } from "react";
import { Register } from "./pages/Register";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/action";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("lmslogin"));
    if (!loggedUser || !loggedUser.email) {
      navigate("/login");
    } else {
      dispatch(addUser(loggedUser));
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lectures" element={<Lectures />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
