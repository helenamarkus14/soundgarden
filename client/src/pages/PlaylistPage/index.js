import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Search from '../../components/SpotifySearch';
import { NavLink } from 'react-router-dom';

const PlaylistPage = () => {
    const [authToken, setAuthToken] = useState();
    const [userId, setUserId] = useState();
    const [userPlaylists, setUserPlaylists] = useState([]);
    const [playlistImages, setPlaylistImages] = useState([]);

    const getInfo = () => {
        setAuthToken(localStorage.getItem("token"));
        setUserId(localStorage.getItem("id"));
    }
    // console.log(userPlaylists[6].images[0].url)
    const renderPlaylists = () => {
        return userPlaylists.map(playlist=> (
            <>
             <div className="grid lg:grid-cols-3">
            <div className="w-96 mt-6 ml-8 bg-white pb-2 rounded-lg border border-black shadow-md dark:bg-black dark:border-black">
            <h2 className="mt-6 mb-1 px-7 text-2xl font-extrabold tracking-wide lg:text-3xl">{playlist.name}</h2>
          <div className="grid lg:grid-cols-3">
            <div key={playlist.id}>
            {/* playlist.images.map(image => {
                <img src={image.url}
            }) */}
            {/* <img src={playlist.images[0].url} alt="missing"></img>  */}

                <a href={playlist.external_urls.spotify}> Link To Playlist</a>
            </div>
            </div>
            </div>
            </div>
            </>
        ))
    }

    const getPlaylists = async () => {
        await axios('https://api.spotify.com/v1/me/playlists', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + authToken
            }
          }).then(response=> {
            setUserPlaylists(response.data.items);
            
            setPlaylistImages(response.data.items.images)
            console.log(response.data.items)
          
          }).catch(error => console.log(error))
    }


    useEffect(() => {
        getInfo();
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
        <button onClick={getPlaylists}>Get My Playlists</button>
    <div className="grid lg:grid-cols-3">
        <h2 className="mt-6 mb-1 px-7 text-2xl font-extrabold tracking-wide lg:text-3xl">{userId}'s Playlists</h2>
        {renderPlaylists()}
        <div className="flex-auto">
        </div>
    </div>
   </div>
    </>
  )
}

export default PlaylistPage;