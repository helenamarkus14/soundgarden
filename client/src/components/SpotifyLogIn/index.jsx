import "./spotifylogin.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import * as userService from "../../api/user.service";
import apiClient from "../../api/axios.config";
import Search from "../SpotifySearch";

function Login() {
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [userId, setUserId] = useState();
    const [userImage, setUserImage] = useState();
    const [artists, setArtists] = useState([]);
    const [userDisplay, setUserDisplay] = useState("");
    const [userSpotifyURL, setUserSpotifyURL] = useState("");

    const logout = () => {
        setToken("");
        setUserId("");
        setUserImage("");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("id");
    }


    const userInfoWrite = async () => {
        let data = {"display_name": userDisplay, "id": userId, "image_url": userImage, "spotify_url": userSpotifyURL}
        let res = await userService.createUser(data).then(() => {
            console.log("Successfully wrote user info into db");
        });
        if (!res === 201) {
            console.log(res.status);
        }
    }

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
            setUserDisplay(response.data.display_name);
            setUserSpotifyURL(response.data.external_urls.spotify);
            window.localStorage.setItem("id", response.data.id);
            userInfoWrite();
          }).catch(error => console.log(error)) 
    }, [])
    return(
        <>
            <div className="flex">
                <img src={userImage ? userImage : "/images/SGLogo.jpg"} className= "h-24 w-24 rounded-full" alt="missing"/>
                <h1 className="text-3xl font-bold text-yellow mt-6 ml-1">{userId}</h1>
       
            </div>
                    <header className="App-header">
                        {!token ?
                        <a href={`${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_DEV_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&scope=${process.env.REACT_APP_SCOPE}`}>Login to Spotify</a>
                        : <button onClick={logout}>Logout</button>}
                        
                    </header>
                    </>
    );    
    }

export default Login;