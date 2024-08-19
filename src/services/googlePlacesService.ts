import api from "./api";

const googlePlacesService = {
    getNearbyPlaces: async (latitude: number, longitude: number, radius: number = 5000) => {
        try {
            const response = await api.get('/places', {
                params: {
                    latitude,
                    longitude,
                    radius
                }
            });

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    getPlaceDetails: async (placeId: string) => {
        try {
            const response = await api.get(`/places/${placeId}`);

            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default googlePlacesService;