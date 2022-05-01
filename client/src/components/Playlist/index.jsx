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
  
      {/* <form className= "p-8 mt-6 mb-0 bg-black space-y-4 border border-solid border-turquoise rounded-lg shadow-2xl">
        <div className="flex flex-row">
          <input className="block py-2.5 px-0 w-full text-sm text-turquoise bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder="Playlist Name" type="text" onChange={e => setName(e.target.value)}/>
        </div>
        <div className="flex flex-row">
          <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-red dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder="Playlist Description" type="text" onChange={e => setDescription(e.target.value)}/>
        </div>    
        <button className="block w-48 justify-center px-5 py-3 text-sm font-medium text-white bg-yellow hover:bg-opacity-75 rounded-lg" onClick={createPlaylist}>Create Spotify Playlist</button>
     </form> */}
     <button className="block w-48 justify-center px-5 py-3 text-sm font-medium text-white bg-yellow hover:bg-opacity-75 rounded-lg" onClick={createPlaylist}>Create Spotify Playlist</button>
    </div>
  )
}

export default Playlist;