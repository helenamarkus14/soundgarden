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
            <h2 className="mt-5 text-center font-extrabold text-5xl">My Spotify Playlists</h2>
        </div>

            <div className="grid lg:grid-cols-3 overflow-hidden">
            {userPlaylists.map((playlist) => {
                return(
                    <>
            
                <div className="w-96 mt-6 mx-auto bg-white pb-2 rounded-lg border border-black shadow-md dark:bg-black dark:border-black">
                    <img className="rounded-lg w-96 h-96" src={playlist.images[0].url} alt="no image found"/>
                    <h2 className="mt-6 mb-1 px-7 text-2xl font-extrabold tracking-wide lg:text-2xl text-white">{playlist.name}</h2>
                        
                            <div className="col-start-2 text-center" key={playlist.id}>
                             <div className="flex flex-row justify-end">  
                            <a className="text-yellow flex" href={playlist.external_urls.spotify}> <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                </svg></a>
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