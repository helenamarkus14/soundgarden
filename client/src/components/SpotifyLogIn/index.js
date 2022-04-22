import "./spotifylogin.css"
import { useEffect, useState } from "react";
import axios from 'axios';

const CLIENT_ID = '86acaba3fb60421f8c54539a7fe7ba83'
const REDIRECT_URI = 'http://localhost:3000/'
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"



function Login() {
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const scope = ["playlist-read-collaborative",
        "playlist-modify-public",
        "playlist-read-private",
        "playlist-modify-private", "user-library-modify",
        "user-library-read"]
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

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                user_id: searchKey,
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

            <header className="App-header">
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
        );      
}  


export default Login;