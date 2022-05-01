import "./spotifylogin.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import * as userService from "../../api/user.service";
import apiClient from "../../api/axios.config";


function Login() {
    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [userId, setUserId] = useState();
    const [userImage, setUserImage] = useState();
    const [artists, setArtists] = useState([]);
    const [userDisplay, setUserDisplay] = useState("");
    const [userSpotifyURL, setUserSpotifyURL] = useState("");
    // const scope = "playlist-read-collaborative playlist-modify-public";
    // const getToken = () => {
    //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
    //     let token = urlParams.get('access_token');
    // }


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
        <div className="flex justify-center items-center flex-col">
        <img src={userImage ? userImage : "/images/SGLogo.jpeg"} className=" flex flex-col items-center justify-center h-24 w-24 rounded-full center" alt="missing"/>
        <h1 className="text-3xl font-bold text-yellow mt-6 ml-1">{userId}</h1>
        {!token ?
                
                <button className="w-48 flex items-center justify-center mx-3 px-5 py-3 text-sm font-medium text-white bg-yellow hover:bg-opacity-75 rounded-lg"> <a href={`${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_DEV_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&scope=${process.env.REACT_APP_SCOPE}`}>Login with Spotify</a></button> 
                    : <button className="flex items-center justify-center w-24 text-sm mr-10 my-3 font-medium text-white bg-yellow hover:bg-opacity-75 rounded-lg" onClick={logout}>Logout</button>
                             
            } 
        </div>
     
                    </>
                    
    );    
    }
        // return(
        //     <>
        //     <h1 className="text-3xl font-bold underline text-yellow">Welcome</h1>
        //      <h1>{userId}</h1>
        //     <img src={userImage} alt="missing"/>
        //     <header className="App-header">
        //                     {!token ?
        //                         <a href={`${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_DEV_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&scope=${process.env.REACT_APP_SCOPE}`}>Login to Spotify</a>
        //                         : <button onClick={logout}>Logout</button>}

        //                     {token ?
        //                         <form onSubmit={searchArtists}>
        //                             <input type="text" onChange={e => setSearchKey(e.target.value)}/>
        //                             <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"type={"submit"}>Search</button>
        //                         </form>

        //                         : <h2>Please login</h2>
        //                     }
        //                     {renderArtists()}

                            
        //        </header>
        //      </>
        // );      



export default Login;
