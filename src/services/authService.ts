import * as SecureStore from 'expo-secure-store';
import api from './api';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Registerparams {
    name: string;
    email: string;
    password: string;
}

interface LoginParams {
    email: string;
    password: string;
}

const authService = {
    register: async (params: Registerparams) => {
        const response = await api.post('/register', params);

        if (response.status === 400) {
            Alert.alert('Erro', 'Usuário já cadastrado');
        }

        return response;
    },

    login: async (params: LoginParams) => {
        const response = await api.post('/login', params);

        if (response.status === 400 || response.status === 401) {
            Alert.alert('Erro', 'Usuário ou senha inválidos');
        } else {
            await SecureStore.setItemAsync('luisapp-token', response.data.token);
            await AsyncStorage.setItem('@user', JSON.stringify(response.data.user));
        }

        return response;
    },
}

export default authService;