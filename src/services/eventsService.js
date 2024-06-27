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

const fetchEventById = async (eventId) => {
    try {
      const { data } = await api.get(`event/${eventId}`);
      return data.result;
    } catch (error) {
      console.error('Error fetching event by ID:', error);
      throw error;
    }
  };
  
  const updateEvent = async (eventId, eventData) => {
    try {
      const { data } = await api.put(`event/${eventId}`, eventData);
      return data.result;
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  };




export { fetchEvents, favoriteEvent, unfavoriteEvent, updateEvent, fetchEventById };