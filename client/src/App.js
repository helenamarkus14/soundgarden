import React from "react";

import {Routes, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import SoundGardenApp from "./pages/SignInPage";
import Login from "./components/SpotifyLogIn";
import Search from "./components/SpotifySearch";
import HomePage from "./pages/HomePage";
import ConcertPage from "./pages/ConcertPage";
import PlaylistPage from "./pages/PlaylistPage";
import CreatePlaylist from "./pages/CreatePlaylist";
import CreateConcert from "./pages/CreateConcert"
import ConcertView from "./components/ConcertView";
import UsersPage from "./pages/UsersPage";
import ConcertPlaylistPage from "./pages/ConcertPlaylistPage";
import ConcertEdit from "./components/ConcertEdit";
import PlaylistForm from "./components/PlaylistForm";
import PlaylistEdit from "./components/PlaylistEdit";
import DashboardPage from "./pages/DashboardPage"



function App() {

  return (
    <div className="App h-screen bg-local bg-gradient-to-t from-stone-800 to-teal-400 bg-cover bg-center overflow-auto">
    {/* // <div className="app"> */}
     <NavBar /> 
      
     <Routes>
        <Route path="/signin" element={<SoundGardenApp />}/>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/concerts/:name" element={<ConcertPage />}/>
        <Route path="/concerts/:name/:id" element={<ConcertView/>}/>
        <Route path="/concerts/:name/:id/edit" element={<ConcertEdit/>}/>
        <Route path="/concerts/:name/:id/playlists" element={<PlaylistForm/>}/>
        <Route path="/concerts/:name/:id1/playlists/:id2/edit" element={<PlaylistEdit/>}/>
        <Route path="/playlists" element={<PlaylistPage/>}/>
        <Route path="/concerts/new" element={<CreateConcert/>}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/playlists/new" element={<CreatePlaylist/>}/>

    </Routes>


    
    </div>
  );
}

export default App;

