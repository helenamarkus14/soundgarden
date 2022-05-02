import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import SearchCard from '../SearchCard';

const Search = () => {
    const [searchForKey, setSearchForKey] = useState("");
    const [artistInfo, setArtistInfo] = useState([]);
    let token = localStorage.getItem("token");

    const renderArtists = () => {
      return artistInfo.map((artist) => (
        
        artist.images[0].url === undefined ? 
          <SearchCard 
            key={artist.id}
            name={artist.name}
          />
          :
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
          console.log(response);
            setArtistInfo(response.data.artists.items);
          }).catch(error => console.log(error))
          .catch(error => console.log(error));
        }


    
  return (
    <div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div className="relative flex items-stretch w-full mb-4 mt-4">
              <input className="min-w-0 w-52 px-3 py-1.5 text-gray-700 border border-solid rounded-l-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" type="text" placeholder="Looking for Artists?" onChange={e => setSearchForKey(e.target.value)}/>
                <button className="inline-block px-3 py-2.5 bg-stone-400 rounded-r-md" onClick={searchBy}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
                </button>
             
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3">
        {renderArtists()}
        </div>
     </div>  
  )
  }

  export default Search;

