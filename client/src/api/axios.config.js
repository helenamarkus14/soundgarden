import axios from "axios";

const backendAPI = "http://localhost:4000/api";
const spotifyAPI = "https://api.spotify.com/v1/";

const token = JSON.parse(localStorage.getItem("token"));
const spotifyClient = axios.create({
    baseURL: `${spotifyAPI}`,
    headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token,
    },
});

const apiClient = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "Content-type": "application/json",
    }
})

export {spotifyClient, apiClient};