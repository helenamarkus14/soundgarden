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

export {indexConcert, userConcert, showConcert, createConcert, updateConcert, destroyConcert};