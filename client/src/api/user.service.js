import apiClient from "./axios.config";


const indexUser = () => { 
    return apiClient.get("/users")
}

const createUser = (data) => {
    return apiClient.post(`/users`, data);
}

const showUser = (name) => {
    return apiClient.get(`/users/${name}/`)
}

export {indexUser, createUser, showUser};