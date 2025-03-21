import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/public/home/Home";
import Login from "./components/public/login/Login";
import Register from "./components/public/login/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
