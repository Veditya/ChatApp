import { Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
