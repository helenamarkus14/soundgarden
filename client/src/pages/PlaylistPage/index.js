import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Search from '../../components/SpotifySearch';
import { NavLink } from 'react-router-dom';

const PlaylistPage = () => {
    const [authToken, setAuthToken] = useState();
    const [userId, setUserId] = useState();
    const [userPlaylists, setUserPlaylists] = useState([]);
  

    const getInfo = () => {
        setAuthToken(localStorage.getItem("token"));
        setUserId(localStorage.getItem("id"));
    }


    const getPlaylists = () => {
         axios('https://api.spotify.com/v1/me/playlists', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + authToken
            }
          }).then(response=> {
            setUserPlaylists(response.data.items);
          }).catch(error => console.log(error))
    }


    useEffect(() => {
        getInfo();
        getPlaylists();
    }, [])


  return (
    <div>
        <div>
        <NavLink to="/playlists/new"><button className="text-yellow bg-black font-bold rounded-full px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">+ Create Playlist</button></NavLink>
        </div>
        <div>
            <Search />
        </div>
        <h2>{userId}'s Playlists</h2>

        <div className="flex-auto">
        </div>

            {userPlaylists.map((playlist) => {
                return(
                    <>
                    <h3>{playlist.id}</h3>
                    <h3>{playlist.name}</h3>
                    <a href={playlist.external_urls.spotify}> Link To Playlist</a>
                    <img src={playlist.images[0].url}/>
                    </>
                )
            })}

    </div>
  )
}

export default PlaylistPage;