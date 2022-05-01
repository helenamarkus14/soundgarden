import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import SearchCard from '../SearchCard';

const Search = () => {
    const [searchForKey, setSearchForKey] = useState("");
    const [artistInfo, setArtistInfo] = useState([]);
    // const [trackInfo, setTrackInfo] = useState([]);
    let token = localStorage.getItem("token");

    const renderArtists = () => {
      return artistInfo.map((artist) => (
        
          <SearchCard 
            key={artist.id}
            image={artist.images[0].url}
            name={artist.name}
          />
      ))
  }



    const searchBy = () => {
        axios("https://api.spotify.com/v1/search", {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            'params': {
                'q': searchForKey,
                'type': "track,artist",
                'limit': 3,
            }
        }).then(response=> {
            setArtistInfo(response.data.artists.items);
          }).catch(error => console.log(error))
          .catch(error => console.log(error));
        }


    
  return (
    <div>
        <input type="text" onChange={e => setSearchForKey(e.target.value)}/>
             <button onClick={searchBy}>Search and Discover Artists</button>
             {renderArtists()}
     </div>  
  )
  }

  export default Search;



  // <img
  //   class="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[450px]"
  //   src="../../photos/tee-green-hanger-2.png"
  //   alt="Basic Tee Product"
  // />

  // <div class="relative pt-4 bg-white">
  //   <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
  //     Basic Tee
  //   </h3>

  //   <p class="mt-2">
  //     <span class="sr-only"> Regular Price </span>

  //     <span class="tracking-wider">
  //       £24.00 GBP
  //     </span>
  //   </p>
  // </div>