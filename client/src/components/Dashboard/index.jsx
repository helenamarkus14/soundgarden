import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import * as userService from "../../api/user.service";

import { NavLink } from "react-router-dom";

const Dashboard = () => {

    const [token, setToken] = useState("")
    const [userId, setUserId] = useState();
    const [userImage, setUserImage] = useState();

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        // getToken()
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
        //get current user info
        axios('https://api.spotify.com/v1/me', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
          }).then(response=> {
            setUserId(response.data.id);
            setUserImage(response.data.images[0].url);
            window.localStorage.setItem("id", response.data.id);
          }).catch(error => console.log(error)) 
    }, [])

    return(
        <div className="">  
        <div className="mt-10 p-5 w-6/12 mx-auto bg-black bg-opacity-70 rounded-xl shadow-md flex flex-col items-center overflow-y-auto touch-auto space x-4 border-2 border-turquoise mb-10">
            <div className="flex flex-col">
            <h1 className="text-yellow text-center text-4xl pb-2">Welcome to Sound Garden</h1>

            <div className="flex justify-center items-center flex-row mb-10">
        <img src={userImage ? userImage : "/images/SGLogo.jpeg"} className=" flex flex-col items-center justify-center h-24 w-24 rounded-full center" alt="missing"/>
        <h1 className="text-3xl font-bold text-turquoise mt-2 ml-1 ">{userId}</h1>
        </div>
        </div> 

        
        </div> 
        <div className="grid lg:grid-cols-3 gap-7">
                    <NavLink to={`/concerts/${userId}`}>
                    <div class="concert w-96 transition ease-in-out delay-400 bg-black bg-opacity-70 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:bg-opacity-80 duration-300 hover concerts p-5 mx-auto bg-black rounded-xl shadow-md flex flex-col items-center overflow-y-auto touch-auto space x-4 border-2 border-turquoise" onClick={()=> {window.location.replace()}}>
                 
                        <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="turquoise" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                        </span>
                
                        <div class="mt-1">
                        <h2 class="text-lg font-bold pb-7 text-center text-gray-300">Add new concert to your memories</h2>
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to="/playlists/new">
                        <div class="w-96 transition ease-in-out delay-400 bg-black bg-opacity-70 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:bg-opacity-80 duration-300 hover concerts p-5 mx-auto bg-black rounded-xl shadow-md flex flex-col items-center overflow-y-auto touch-auto space x-4 border-2 border-turquoise">
                            <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="turquoise" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                            </span>
                    
                            <div class="m-auto">
                            <h2 class="text-lg text-center pb-8 font-bold text-gray-300">View your Spotify playlists</h2>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/users">
                        <div class="w-96 transition ease-in-out delay-400 bg-black bg-opacity-70 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:bg-opacity-80 duration-300 hover concerts p-5 mx-auto bg-black rounded-xl shadow-md flex flex-col items-center overflow-y-auto touch-auto space x-4 border-2 border-turquoise">
                            <span class="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="turquoise" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                            </span>
                    
                            <div class="">
                            <h2 class="text-lg font-bold text-center text-gray-300 pb-1">Discover new music from fellow concert goers</h2>
                    
                            </div>
                        </div>
                    </NavLink>
        </div>   
        </div>

        

    )
}

export default Dashboard;