import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import * as spotify from "../../api/auth.service"
import { Buffer } from 'buffer';


const Search = () => {
    const [authToken, setAuthToken] = useState();
    const [searchForKey, setSearchForKey] = useState("");
    const [artistInfo, setArtistInfo] = useState("");


    const getInfo = () => {
      let token = localStorage.getItem("token");
      setAuthToken(token);
    }

    useEffect(() => {;
    getInfo();

  }, []);


    // useEffect(() => {
    //        axios('https://accounts.spotify.com/api/token', {
    //         'method': 'POST',
    //         'headers': {
    //           'Content-Type':'application/x-www-form-urlencoded',
    //           'Authorization': 'Basic ' + (Buffer('166cc5375d5442928444b3fc397a5bd7' + ':' + 'a4cd7c73faf44197bebf1ebc3d58152d').toString('base64')),
    //         },
    //         data: 'grant_type=client_credentials'
    //     }).then(tokenresponse => {
    //       setToken(tokenresponse.data.access_token);
    //     }).catch(error => console.log(error))
    //  }, []);


    const searchBy = () => {
        axios("https://api.spotify.com/v1/search", {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            params: {
                q: searchForKey,
                type: "track,artist"
            }
        }).then(response=> {
            console.log(response.data.tracks.items[0].external_urls.spotify)
            
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