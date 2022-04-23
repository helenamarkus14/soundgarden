import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Buffer } from 'buffer';

const CLIENT_ID = '86acaba3fb60421f8c54539a7fe7ba83'
const REDIRECT_URI = 'http://localhost:3000/'
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"



const Search = () => {
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState();
    const [userId, setUserId] = useState();
    const [searchForKey, setSearchForKey] = useState("");
    const [artistInfo, setArtistInfo] = useState("");

    const searchBy = () => {
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


        axios("https://api.spotify.com/v1/search", {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            params: {
                q: searchForKey,
                type: "artist,track"
            }
        }).then(response=> {
            console.log(response)
            console.log()
          }).catch(error => console.log(error))
          .catch(error => console.log(error));
        }


    
  return (
    <div>
    <form onSubmit={searchBy}>
        <input type="text" onChange={e => setSearchForKey(e.target.value)}/>
             <button type={"submit"}>Search</button>
     </form>
     </div>  
  )
  }

  export default Search;