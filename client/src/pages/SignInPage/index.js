import React from "react";
import "./signin.css";
import Login from "../../components/SpotifyLogIn";


export default function SoundGardenApp() {
    return (
        <>
      
      <div className="bg-crowd bg-cover bg-center h-full">  
        <div className="p-5 w-screen mx-auto bg-transparent flex flex-col items-center justify-center overflow-y-auto touch-auto space x-4">
            <div className="flex flex-col items-center">
            <h1 className="text-red text-center text-4xl pb-2">Welcome to Sound Garden</h1>
            <Login />
        </div>
    
        </div>                    
    </div>  
    </>
    
    );
};

