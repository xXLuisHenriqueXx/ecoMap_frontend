import * as SecureStore from 'expo-secure-store';
import api from './api';

interface AddParams {
    title: string;
    rating: number;
    address: string;
    googlePlaceId: string;
}

interface DeleteParams {
    _id: string;
}

const placeDiscardService = {
    getPlaces: async () => {
        const token = await SecureStore.getItemAsync('luisapp-token');

        const response = await api.get('/savedplaces', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response;
    },

    save : async (params: AddParams) => {
        const token = await SecureStore.getItemAsync('luisapp-token');

        const response = await api.post('/savedplaces', params, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response;
    },

    delete: async (params: DeleteParams) => {
        const token = await SecureStore.getItemAsync('luisapp-token');

        const response = await api.delete(`/savedplaces/${params._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response;
    }
}

export default placeDiscardService;