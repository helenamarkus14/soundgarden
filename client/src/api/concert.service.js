import apiClient from "./axios.config";


const indexConcert = () => { 
    return apiClient.get("/concerts")
}

const userConcert = (id) => {
    return apiClient.get(`/concerts/${id}`);
}

const showConcert = (name, id) => {
    return apiClient.get(`/concerts/${name}/${id}`)
}

const createConcert = (data) => {
    return apiClient.post("/concerts", data);
}

const updateConcert = (name, id, data) => {
    return apiClient.put(`/concerts/${name}/${id}`, data);
}

const destroyConcert = (name, id) => {
    return apiClient.delete(`/concerts/${name}/${id}`);
}

const newPlaylist = (name, id, data) => {
    return apiClient.post(`/concerts/${name}/${id}/playlists`, data);
}

const showPlaylist = (name, id1, id2, data) => {
    return apiClient.get(`/concerts/${name}/${id1}/playlists/${id2}/edit`, data);
}

const updatePlaylist = (name, id1, id2, data) => {
    return apiClient.put(`/concerts/${name}/${id1}/playlists/${id2}/edit`, data);
}

const deletePlaylist = (name, id1, id2) => {
    return apiClient.delete(`/concerts/${name}/${id1}/playlists/${id2}`);
}



export {indexConcert, userConcert, showConcert, createConcert, updateConcert, destroyConcert, newPlaylist, showPlaylist, updatePlaylist, deletePlaylist};