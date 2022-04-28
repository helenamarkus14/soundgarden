import React from "react";

import {Routes, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import SoundGardenApp from "./pages/SignInPage";
import Login from "./components/SpotifyLogIn";
import Search from "./components/SpotifySearch";
import ConcertPage from "./pages/ConcertPage";
import PlaylistPage from "./pages/PlaylistPage";
import CreatePlaylist from "./pages/CreatePlaylist";
import CreateConcert from "./pages/CreateConcert"

import ConcertView from "./components/ConcertView";


function App() {

  // const CLIENT_ID = '86acaba3fb60421f8c54539a7fe7ba83'
  // const REDIRECT_URI = 'http://localhost:3000/'
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  // const RESPONSE_TYPE = "token"

  // const [token, setToken] = useState("")
  // const [searchKey, setSearchKey] = useState("")
  // const [artists, setArtists] = useState([])

  // // const getToken = () => {
  // //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
  // //     let token = urlParams.get('access_token');
  // // }

  // useEffect(() => {
  //     const hash = window.location.hash
  //     let token = window.localStorage.getItem("token")

  //     // getToken()


  //     if (!token && hash) {
  //         token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

  //         window.location.hash = ""
  //         window.localStorage.setItem("token", token)
  //     }

  //     setToken(token)

  // }, [])

  // const logout = () => {
  //     setToken("")
  //     window.localStorage.removeItem("token")
  // }

  // const searchArtists = async (e) => {
  //     e.preventDefault()
  //     const {data} = await axios.get("https://api.spotify.com/v1/search", {
  //         headers: {
  //             Authorization: `Bearer ${token}`
  //         },
  //         params: {
  //             q: searchKey,
  //             type: "artist"
  //         }
  //     })

  //     setArtists(data.artists.items)
  // }

  // const renderArtists = () => {
  //     return artists.map(artist => (
  //         <div key={artist.id}>
  //             {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
  //             {artist.name}
  //         </div>
  //     ))
  // }

  return (
    <div className="App h-screen bg-gradient-to-t from-gray-800 to-black-600">
     <NavBar /> 
      
     <Routes>
        <Route path="/" element={<SoundGardenApp />}/>
        <Route path="/concerts" element={<ConcertPage />}/>
        <Route path="/concerts/:id" element={<ConcertView/>}/>
        <Route path="/playlists" element={<PlaylistPage/>}/>
        <Route path="/concerts/new" element={<CreateConcert/>}/>
        <Route path="/playlists/new" element={<CreatePlaylist/>}/>
    </Routes>


    
    </div>
  );
}

export default App;

