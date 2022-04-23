import React from 'react'
import { useEffect, useState } from "react";
import { Buffer } from 'buffer';
import * as spotify from "../../api/auth.service"
import axios from "axios";


const Playlist = () => {
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState();
    const [userId, setUserId] = useState();
    const [userImage, setUserImage] = useState();
    const [playlistName, setPlaylistName] = useState("");
    const [playlistDescription, setPlaylistDescription] = useState("");
    
    useEffect(() => {
      axios('https://accounts.spotify.com/api/token', {
       'method': 'POST',
       'headers': {
         'Content-Type':'application/x-www-form-urlencoded',
         'Authorization': 'Basic ' + (Buffer('166cc5375d5442928444b3fc397a5bd7' + ':' + 'a4cd7c73faf44197bebf1ebc3d58152d').toString('base64')),
       },
       data: 'grant_type=client_credentials'
   }).then(tokenresponse => {
     setToken(tokenresponse.data.access_token);
   }).catch(error => console.log(error))
}, []);


const getUserInfo = () => {
  axios('https://api.spotify.com/v1/users/deeeezy', {
          'method': 'GET',
          'headers': {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
          }
        }).then(response=> {
          setUserData(response);
          setUserId(response.data.id);
          setUserImage(response.data.images[0].url);
        }).catch(error => console.log(error))
}


const createPlaylist = () => {
  axios(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          'method': 'POST',
          'headers': {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + token
          },
          body: {
            name: playlistName,
            description: playlistDescription,
        }
        }).then(response=> {
          console.log(response);
        }).catch(error => console.log(error))
}

    // useEffect(() => {
    //     axios('https://accounts.spotify.com/api/token', {
    //         'method': 'POST',
    //         'headers': {
    //           'Content-Type':'application/x-www-form-urlencoded',
    //           'Authorization': 'Basic ' + (Buffer('166cc5375d5442928444b3fc397a5bd7' + ':' + 'a4cd7c73faf44197bebf1ebc3d58152d').toString('base64')),
    //         },
    //         data: 'grant_type=client_credentials'
    //     }).then(tokenresponse => {
    //       console.log(tokenresponse);
    //       setToken(tokenresponse.data.access_token);
    //     }).catch(error => console.log(error))


    //     axios('https://api.spotify.com/v1/users/helenamarkus14', {
    //       'method': 'GET',
    //       'headers': {
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json',
    //           'Authorization': 'Bearer ' + token
    //       }
    //     }).then(response=> {
    //       setUserData(response);
    //       setUserId(response.data.id);
    //       setUserImage(response.data.images[0].url);
    //       console.log(userData);
    //       console.log(userId);
    //       console.log(userImage);
    //     }).catch(error => console.log(error))
    //     // .catch(error => console.log(error));
    // }, []);

  return (
    <div>
      <h1>{userId}</h1>
      <img src={userImage} alt="missing"/>
      <button onClick={getUserInfo}>GET USER INFO</button>

      <form onSubmit={createPlaylist}>
        <input placeholder="Playlist Name" type="text" onChange={e => setPlaylistName(e.target.value)}/>
        <input placeholder="Playlist Description" type="text" onChange={e => setPlaylistDescription(e.target.value)}/>
             <button type={"submit"}>Create Playlist</button>
     </form>
    </div>
  )
}

export default Playlist;