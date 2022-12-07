import "./App.css";
import Forms from "./components/forms";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import NewProperty from "./components/NewProperty";
import React, { useState } from "react";
function App() {
  const [user, setUser] = useState(null);

  

  return (
    <div className="App">
      <Navbar  />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/new" element={<NewProperty />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
