import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
