import "./App.css";
import Forms from "./components/forms";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import NewProperty from "./components/NewProperty";
import Login from "./components/Login"; 
import React, { useState, useEffect } from "react";
function App() {
  const [user, setUser] = useState(null);

  

  return (
    <div className="App">
      <Navbar setUser={setUser} user={user} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/new" element={<NewProperty />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
