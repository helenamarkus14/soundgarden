import axios from "axios";

const backendAPI = "http://thesoundgarden.herokuapp.com/api"

const apiClient = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "Content-type": "application/json",
    }
})

export default apiClient;