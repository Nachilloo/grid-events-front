import api from "./config.js"

const createEvent = async (dataForm) => {
    try {
        const { data } = await api.post('/event', dataForm)
        return data
    } catch (error) {
        console.log(error)
    }
}

export {
    createEvent
}