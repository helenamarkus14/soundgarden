import React from "react";

import {Routes, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import SoundGardenApp from "./pages/SignInPage";
import Login from "./components/SpotifyLogIn";
import Search from "./components/SpotifySearch";
import ConcertPage from "./pages/ConcertPage";
import PlaylistPage from "./pages/PlaylistPage";

import CreateConcert from "./pages/CreateConcert"

import ConcertView from "./components/ConcertView";


function App() {

  return (
    <div className="App h-screen bg-gradient-to-t from-gray-800 to-black-600">
     <NavBar /> 
      
     <Routes>
        <Route path="/" element={<SoundGardenApp />}/>
        <Route path="/concerts/:name" element={<ConcertPage />}/>
        <Route path="/concerts/:name/:id" element={<ConcertView/>}/>
        <Route path="/playlists" element={<PlaylistPage/>}/>
        <Route path="/concerts/new" element={<CreateConcert/>}/>
    </Routes>


    <Search />
    </div>
  );
}

export default App;

