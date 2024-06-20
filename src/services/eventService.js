import api from "./config"

const getFavouriteEvent = async () => {
    try {
        const response = await api.get('/');
        return response.data;
      } catch (error) {
        console.error('Error fetching favorite events:', error);
        throw error;
      }
    };

export {
    getFavouriteEvent
}