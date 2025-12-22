import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: false
})

// Token Automation
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export const register = (data) => API.post('/api/auth/register', data)
export const login = (data) => API.post('/api/auth/login', data)

export const createRooms = (data) => API.post('/api/rooms', data)
export const updateRooms = (id, formData) =>
    API.put(`/api/rooms/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
export const deletedRooms = (id) => API.delete(`/api/rooms/${id}`)
export const getAllRooms = () => API.get('/api/rooms')
export const getRoomById = (id) => API.get(`/api/rooms/${id}`)

export const getAllInformations = () => API.get('/api/informations')
export const getInformationById = (id) => API.get(`/api/informations/${id}`)
export const createInformation = (data) => API.post('/api/informations', data)
export const updateInformations = (id, formData) =>
    API.put(`/api/informations/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
export const deletedInformations = (id) => API.delete(`/api/informations/${id}`)

export const createBookings = (data) => API.post('/api/bookings', data)
export const getUserBookings = () => API.get('/api/bookings/mybookingsroom')
export const getAllBookings = () => API.get('/api/bookings')

export default API
