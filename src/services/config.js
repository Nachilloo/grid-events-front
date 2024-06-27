import axios from "axios"

const api = axios.create({
    baseURL: 'https://grid-events-back.onrender.com/api/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("token")
    },
})

export default api
