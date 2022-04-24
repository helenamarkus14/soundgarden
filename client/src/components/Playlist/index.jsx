import React from 'react'
import { useEffect, useState } from "react";
import { Buffer } from 'buffer';
import * as spotify from "../../api/auth.service"
import axios from "axios";



const Playlist = () => {
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState();
    const [authToken, setAuthToken] = useState();
    const [userId, setUserId] = useState();
    const [userImage, setUserImage] = useState();
    const [playlistName, setPlaylistName] = useState("");
    const [playlistDescription, setPlaylistDescription] = useState("");
    
    const getInfo = () => {
      let token = localStorage.getItem("token");
      let id = localStorage.getItem("id");
      setAuthToken(token);
      setUserId(id);
    }

    useEffect(() => {;
    getInfo();
  }, []);


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
    <div>
      <form onSubmit={createPlaylist}>
        <input placeholder="Playlist Name" type="text" onChange={e => setPlaylistName(e.target.value)}/>
        <input placeholder="Playlist Description" type="text" onChange={e => setPlaylistDescription(e.target.value)}/>
             <button type={"submit"}>Create Playlist</button>
     </form>
    </div>
  )
}

export default Playlist;