import { Routes, Route, useNavigate } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { Assignments } from "./pages/Assignments";
import { Home } from "./pages/Home";
import { Lectures } from "./pages/Lectures";
import { Login } from "./pages/Login";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("lmsLogin"));
    if (!loggedUser || !loggedUser.name) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
