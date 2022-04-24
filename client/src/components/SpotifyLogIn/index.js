import "./spotifylogin.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import * as auth from "../../api/auth.service";

const CLIENT_ID = '166cc5375d5442928444b3fc397a5bd7'
const REDIRECT_URI = 'http://localhost:3000'
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


function Login() {
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [userId, setUserId] = useState();
    const [userImage, setUserImage] = useState();
    const [artists, setArtists] = useState([])
    const scope = "playlist-read-collaborative playlist-modify-public";
    // const getToken = () => {
    //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
    //     let token = urlParams.get('access_token');
    // }

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        // getToken()
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
        //get current user info
        axios('https://api.spotify.com/v1/me', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
          }).then(response=> {
            setUserId(response.data.id);
            setUserImage(response.data.images[0].url);
            window.localStorage.setItem("id", response.data.id);
          }).catch(error => console.log(error))
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("id");
    }

    const getAuthToken = () => {
        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scope}`;
    }

    // const getUserInfo = () => {
    //     axios('https://api.spotify.com/v1/me', {
    //             'method': 'GET',
    //             'headers': {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //                 'Authorization': 'Bearer ' + token
    //             }
    //           }).then(response=> {
    //             setUserId(response.data.id);
    //             setUserImage(response.data.images[0].url);
    //             window.localStorage.setItem("id", response.data.id);
    //           }).catch(error => console.log(error))
    //   }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
        setArtists(data.artists.items)
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

        return(
            <>
            <h1>Welcome</h1>
             <h1>{userId}</h1>
        <img src={userImage} alt="missing"/>
            <header className="App-header">
                <button onClick={getAuthToken}>GET DA AUTH</button>
                            {!token ?
                                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scope}`}>Login to Spotify</a>
                                : <button onClick={logout}>Logout</button>}

                            {token ?
                                <form onSubmit={searchArtists}>
                                    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                                    <button type={"submit"}>Search</button>
                                </form>

                                : <h2>Please login</h2>
                            }
                            {renderArtists()}
                            
                        </header>
                        </>
        );      
}  


export default Login;