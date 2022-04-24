import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

const Search = () => {
    const [authToken, setAuthToken] = useState();
    const [searchForKey, setSearchForKey] = useState("");
    const [artistInfo, setArtistInfo] = useState([]);
    const [trackInfo, setTrackInfo] = useState([]);

    const getInfo = () => {
      let token = localStorage.getItem("token");
      setAuthToken(token);
    }

    const renderArtists = () => {
      return artistInfo.map(artist => (
          <div key={artist.id}>
              {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
              {artist.name}
          </div>
      ))
  }

  const renderTracks = () => {
    return trackInfo.map(track => (
      <div key={track.id}>
          {track.name}
      </div>
  ))
  }
    useEffect(() => {;
    getInfo();

  }, []);

    const searchBy = () => {
        axios("https://api.spotify.com/v1/search", {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            'params': {
                'q': searchForKey,
                'type': "track,artist"
            }
        }).then(response=> {
            console.log(response.data.tracks.items[0].external_urls.spotify)
            console.log(response);
            setArtistInfo(response.data.artists.items);
            setTrackInfo(response.data.tracks.items);
          }).catch(error => console.log(error))
          .catch(error => console.log(error));
        }


    
  return (
    <div>
        <input type="text" onChange={e => setSearchForKey(e.target.value)}/>
             <button onClick={searchBy}>Search</button>
             {renderArtists()}
             {renderTracks()}
     </div>  
  )
  }

  export default Search;