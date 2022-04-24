import React, {useState, useEffect} from 'react'
import axios from 'axios';




const PlaylistPage = () => {
    const [authToken, setAuthToken] = useState();
    const [userId, setUserId] = useState();
    const [userPlaylists, setUserPlaylists] = useState([]);

    const getInfo = () => {
        setAuthToken(localStorage.getItem("token"));
        setUserId(localStorage.getItem("id"));
    }

    const renderPlaylists = () => {
        return userPlaylists.map(playlist => (
            <div key={playlist.id}>
                {playlist.name}
                <a href={playlist.external_urls.spotify}> Link To Playlist</a>
            </div>
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
            console.log(response.data.items);
          }).catch(error => console.log(error))
    }


    useEffect(() => {
        getInfo();
    }, [])


  return (
    <div>
        <h2>{userId}'s Playlists</h2>
        <button onClick={getPlaylists}>Get My Playlists</button>
        {renderPlaylists()}
    </div>
  )
}

export default PlaylistPage;