import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import * as concertService from "../../api/concert.service"

const Playlist = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [spotify_url, setSpotify_URL] = useState();
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("id");
    let {id1} = useParams();
    let {id2} = useParams();



const createPlaylist = () => {
  axios(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          'method': 'POST',
          'headers': {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
          },
          'data': JSON.stringify({
            'name': name,
            'description' : description
        }),
        dataType:'json',
        }).then(response=> {
          console.log(response);
        //  setSpotify_URL(response.data.external_urls.spotify);
        //  console.log(spotify_url);
          let data = {name, description, "spotify_url": response.data.external_urls.spotify}
          concertService.updatePlaylist(userId, id1, id2, data).then((res) => {
            console.log(res);
          })
        }).catch(error => console.log(error))
}

const getPlaylistInfo = () => {
  concertService.showPlaylist(userId, id1, id2).then((res) => {
     setName(res.data.data.playlists.name)
     setDescription(res.data.data.playlists.description);
  })
}

useEffect(() => {
  getPlaylistInfo();
}, [])

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
  
     <button className="block w-48 justify-center px-5 py-3 text-sm font-medium text-black bg-green-500 hover:bg-black hover:text-green-500 rounded-lg" onClick={createPlaylist}>Create Spotify Playlist</button>
    </div>
  )
}

export default Playlist;