import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
    </Routes>,

    <Routes>
    <Route path="/register" element={<RegisterLayout />} />
  </Routes>
  );
}
export default App;
