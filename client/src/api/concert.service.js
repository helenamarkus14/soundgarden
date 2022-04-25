import apiClient from "./axios.config";


const indexConcert = () => { 
    return apiClient.get("/concerts")
}

const showConcert = (id) => {
    return apiClient.get(`/concerts/${id}`)
}

const createConcert = (data) => {
    return apiClient.post("/concerts", data);
}

const updateConcert = (id, data) => {
    return apiClient.put(`/concerts/${id}`, data);
}

const destroyConcert = (id) => {
    return apiClient.delete(`/concerts/${id}`);
}

export {indexConcert, showConcert, createConcert, updateConcert, destroyConcert};