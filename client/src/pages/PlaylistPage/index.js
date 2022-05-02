import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const PlaylistPage = () => {

    const [userPlaylists, setUserPlaylists] = useState([]);
    let authToken = localStorage.getItem("token");
    let userId = localStorage.getItem("id");
  

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
        getPlaylists();
        renderPlaylists();
    }, [])


  return (
    <>
    <div>
        <div className="flex-auto align-middle justify-center text-center">
            <h2 className="mt-5 font-extrabold text-5xl">My Spotify Playlists</h2>
        </div>

            <div className="grid lg:grid-cols-3 overflow-hidden">
            {userPlaylists.map((playlist) => {
                return(
                    <>
            
                <div className="w-96 mt-6 ml-8 bg-white pb-2 rounded-lg border border-black shadow-md dark:bg-black dark:border-black">
                    <h2 className="mt-6 mb-1 px-7 text-2xl font-extrabold tracking-wide lg:text-2xl text-white">{playlist.name}</h2>
                        <div className="grid lg:grid-cols-3">
                            <div className="col-start-2 text-center" key={playlist.id}>
                            <a className="text-yellow" href={playlist.external_urls.spotify}> Link To Playlist</a>
                            <img className="rounded-lg" src={playlist.images[0].url} alt="no image found"/>
                            </div>
                        </div>
                </div>
            
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default PlaylistPage;