import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("token")
    },
})

export default api