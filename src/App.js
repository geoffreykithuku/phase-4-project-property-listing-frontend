import "./App.css";
<<<<<<< HEAD
import React,{Fragment} from 'react';
import Home from "./components/Home";
import Property from "./components/property";
 
function App() {
  return (
    <div className="App">
     <Fragment>


<Home/>
<Property/>

</Fragment> 
=======
import Forms from "./components/forms";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import NewProperty from "./components/NewProperty"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
       
        <Route path="/new" element={<NewProperty />} />
        <Route path="/forms" element={<Forms/>} />
      </Routes>
>>>>>>> 357aa46f9a6ea2c1582c54fe0ebefd9729fc6170
    </div>
  );
}

export default App;
