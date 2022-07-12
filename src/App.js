import { Routes, Route } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { Assignments } from "./pages/Assignments";
import { Home } from "./pages/Home";
import { Lectures } from "./pages/Lectures";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="lectures" element={<Lectures />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
