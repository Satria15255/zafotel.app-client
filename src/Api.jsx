import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: false
})

export const getAllRooms = () => API.get('/api/rooms')

export default API
