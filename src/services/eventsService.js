import api from "./config"

const fetchEvents = async () => {
    try {
        const { data } = await api.get('event/')
        return data.result;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
}

export { fetchEvents };