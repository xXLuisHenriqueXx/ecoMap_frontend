import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import api from "./api";

interface updateProfile {
    name: string;
    email: string;
}

interface UpdateProfilePicture {
    profilePicture: string;
}

interface RemoveProfilePicture {
    profilePicture: string;
}

const userService = {
    getUserProfile: async () => {
        const token = await SecureStore.getItemAsync("luisapp-token");
        const user = await AsyncStorage.getItem("@user");

        const { _id } = JSON.parse(user || "");
    
        const response = await api.get(`/user/${_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        
        return response;
    },

    updateUserProfile: async (params: updateProfile) => {
        const token = await SecureStore.getItemAsync("luisapp-token");

        const response = await api.put("/profile", params, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        return response;
    },

    updateProfilePicture: async (params: UpdateProfilePicture) => {
        const token = await SecureStore.getItemAsync("luisapp-token");

        const extension = params.profilePicture.split('.').pop()?.toLowerCase();
        const mimeType = extension === 'jpg' || extension === 'jpeg' ? 'image/jpeg' : 'image/png';

        const formData = new FormData();
        formData.append("profilePicture", {
            name: `profilePicture.${extension}`,
            uri: params.profilePicture,
            type: mimeType
        } as any);     

        const response = await api.post('/profilepicture', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });

        return response;
    },

    removeProfilePicture: async () => {
        const token = await SecureStore.getItemAsync("luisapp-token");

        const response = await api.delete('/profilepicture', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response;
    }
}

export default userService;