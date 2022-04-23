import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Buffer } from 'buffer';

const CLIENT_ID = '86acaba3fb60421f8c54539a7fe7ba83'
const REDIRECT_URI = 'http://localhost:3000/'
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"



const Playlist = () => {
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState();
    const [userId, setUserId] = useState();
    const [userImage, setUserImage] = useState();
 
    useEffect(() => {
        // const hash = window.location.hash
        // let token = window.localStorage.getItem("token")
        // if (!token && hash) {
        //     token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        //     window.location.hash = ""
        //     window.localStorage.setItem("token", token)
        // }
        // setToken(token);
        // console.log(token);

        axios('https://accounts.spotify.com/api/token', {
            'method': 'POST',
            'headers': {
              'Content-Type':'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + (Buffer('166cc5375d5442928444b3fc397a5bd7' + ':' + 'a4cd7c73faf44197bebf1ebc3d58152d').toString('base64')),
            },
            data: 'grant_type=client_credentials'
        }).then(tokenresponse => {
          // console.log(tokenresponse.data.access_token);
          setToken(tokenresponse.data.access_token);
        }).catch(error => console.log(error))


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
          console.log(userData);
          console.log(userId);
          console.log(userImage);
        }).catch(error => console.log(error))
        .catch(error => console.log(error));
    }, []);

  return (
    <div>
      <h1>{userId}</h1>
      <img src={userImage} alt="missing"/>

    </div>
  )
}

export default Playlist;