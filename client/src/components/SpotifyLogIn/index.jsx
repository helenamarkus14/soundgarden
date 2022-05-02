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
            <div className="flex items-center justify-center">
                <img src={userImage ? userImage : "/images/SGLogo.jpeg"} className= "flex h-24 w-24 rounded-full" alt="missing"/>
                <h1 className="flex text-3xl font-bold text-yellow mt-6 ml-1">{userId}</h1>
            </div>
            <div className="text-center mt-5 shadow-lg">
                <a className="bg-red hover:bg-yellow text-white font-bold py-2 px-4 rounded" href={`${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_PROD_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&scope=${process.env.REACT_APP_SCOPE}`}>Connect to Spotify</a>
            </div>
            <div className="max-w-sm rounded">
                <div className="justify-center align-middle w-auto bg-stone-500 items-center text-center mt-5 rounded-md px-4 py-1">
                    <h3 className="text-white">By using this application, you are agreeing to Spotify's License Agreement as required <br></br>to log in or sign up.</h3>
                </div>
                <div className="text-center align-middle mt-5">
                    <a className="bg-green-500 hover:bg-black hover:text-green-500 text-black rounded-md px-2 py-2" href="https://www.spotify.com/us/legal/end-user-agreement/">Spotify Terms and Conditions</a>
                </div>
            </div>
        </>
                    
    );    
    }

export default Login;
