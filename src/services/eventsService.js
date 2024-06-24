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

const favoriteEvent = async (eventId) => {
    try {
        await api.post(`/event/${eventId}/favorite`);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const unfavoriteEvent = async (eventId) => {
    try {
        await api.delete(`/event/${eventId}/favorite`);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export { fetchEvents, favoriteEvent, unfavoriteEvent };