import axios from "axios";
import { Buffer } from 'buffer';


const authAPI = "https://accounts.spotify.com/api/token";

const spotifyAuth = axios.create({
    baseURL: `${authAPI}`,
    headers: {
        "Content-type": "application/x-www-form-urlencoded",
        'Authorization': 'Basic ' + (Buffer('166cc5375d5442928444b3fc397a5bd7' + ':' + 'a4cd7c73faf44197bebf1ebc3d58152d').toString('base64')),
    },
    data: 'grant_type=client_credentials'
});


const spotifyToken = (tokenresponse) => {
    try {
    return spotifyAuth
    .post("/")
    .then ((tokenresponse) => {
        console.log(tokenresponse);
            if (tokenresponse.data.access_token){
                localStorage.setItem("token", JSON.stringify(tokenresponse.data.access_token));
            }
                return tokenresponse.data.access_token
        })
        } catch (err) {
            console.log(err);
    }
}

const spotifyLogout = () => {
    localStorage.removeItem("token");
}

export {spotifyAuth, spotifyToken, spotifyLogout};

