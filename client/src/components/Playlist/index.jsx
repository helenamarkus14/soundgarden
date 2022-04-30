import React from 'react'
import { useEffect, useState } from "react";
import { Buffer } from 'buffer';
import * as spotify from "../../api/auth.service"
import axios from "axios";



const Playlist = () => {
    const [authToken, setAuthToken] = useState();
    const [userId, setUserId] = useState();
    const [userPlaylists, setUserPlaylists] = useState([]);
    const [playlistName, setPlaylistName] = useState("");
    const [playlistDescription, setPlaylistDescription] = useState("");

    const getInfo = () => {
      let token = localStorage.getItem("token");
      let id = localStorage.getItem("id");
      setAuthToken(token);
      setUserId(id);
    }


const createPlaylist = () => {
  console.log(authToken);
  axios(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          'method': 'POST',
          'headers': {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + authToken
          },
          'data': JSON.stringify({
            'name': playlistName,
            'description' : playlistDescription
        }),
        dataType:'json',
        }).then(response=> {
          console.log(response);
        }).catch(error => console.log(error))
}


  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
  
      <form className= "p-8 mt-6 mb-0 bg-black space-y-4 border border-solid border-turquoise rounded-lg shadow-2xl" onSubmit={createPlaylist}>
        <div className="flex flex-row">
          <input className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder="Playlist Name" type="text" onChange={e => setPlaylistName(e.target.value)}/>
        </div>
        <div className="flex flex-row">
          <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder="Playlist Description" type="text" onChange={e => setPlaylistDescription(e.target.value)}/>
        </div>    
        <button className="block w-48 justify-center px-5 py-3 text-sm font-medium text-white bg-yellow hover:bg-opacity-75 rounded-lg" type={"submit"}>Create Spotify Playlist</button>
     </form>
    </div>
  )
}

export default Playlist;