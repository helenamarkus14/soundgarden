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

    const renderPlaylists = () => {
        return userPlaylists.map(playlist=> (
            <>
             <div className="grid lg:grid-cols-3">
            <div className="w-96 mt-6 ml-8 bg-white pb-2 rounded-lg border border-black shadow-md dark:bg-black dark:border-black">
            <h2 className="mt-6 mb-1 px-7 text-2xl font-extrabold tracking-wide lg:text-3xl">{playlist.name}</h2>
          <div className="grid lg:grid-cols-3">
            <div key={playlist.id}>

                <a href={playlist.external_urls.spotify}> Link To Playlist</a>
            </div>
            </div>
            </div>
            </div>
            </>
        ))
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
    <>
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
   </div>
    </>
  )
}

export default PlaylistPage;