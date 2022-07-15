import { Routes, Route } from "react-router-dom";
import { AdminAssignment } from "./components/AdminAssignment";
import { AdminLecture } from "./components/AdminLecture";
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
      <Route path="/admin">
        <Route index element={<AdminLecture />} />
        <Route path="lecture" element={<AdminLecture />} />
        <Route path="assignment" element={<AdminAssignment />} />
      </Route>
    </Routes>
  );
}

export default App;
