import "./App.css";
import React from "react";
 import Forms from "./components/forms";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Forms />
      <Navbar/>
      <Footer />
    </div>
  );
}

export default App;
