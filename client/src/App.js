import React from "react";
import {Routes, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import SoundGardenApp from "./pages/SignInPage";

function App() {
  return (
    <div className="App">
     <NavBar /> 

     <Routes>
        <Route path="/" element={<SoundGardenApp />}/>
    </Routes>
    </div>
  );
}

export default App;
