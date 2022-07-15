import { Routes, Route } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { Assignments } from "./pages/Assignments";
import { Home } from "./pages/Home";
import { Lectures } from "./pages/Lectures";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
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
