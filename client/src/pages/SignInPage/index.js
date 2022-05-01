import React from "react";
// import NavBar from "../../components/NavBar";
import "./signin.css";
import Playlist from "../../components/Playlist";

import Login from "../../components/SpotifyLogIn";


export default function SoundGardenApp() {
    return (
        <>
      
      <div className="bg-crowd bg-cover bg-center h-full">  
        <div className="p-5 w-screen mx-auto bg-black bg-opacity-70 rounded-xl shadow-md flex flex-col items-center justify-center overflow-y-auto touch-auto space x-4 border-2 border-turquoise">
            <div className="flex flex-col justify-center">
            <h1 className="text-red text-center text-4xl pb-2">Welcome to Sound Garden</h1>
            <Login />
        </div>
    
        </div>                    
    </div>  
    </>
    
    );
};

