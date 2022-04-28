import React from "react";
// import NavBar from "../../components/NavBar";
import "./signin.css";
import Playlist from "../../components/Playlist";
import Login from "../../components/SpotifyLogIn";


export default function SoundGardenApp() {
    return (
    <div className="bg-crowd bg-cover bg-center h-full">  
        <div className="p-5 max-w-lg mx-auto bg-black bg-opacity- rounded-xl shadow-md flex flex-col items-center space x-4 border-2 border-turquoise">
            <div className="flex flex-col">
            <h1 className="text-red">Welcome to Sound Garden</h1>
            </div>
            <Login />
        </div>
    </div>  
    );
};

