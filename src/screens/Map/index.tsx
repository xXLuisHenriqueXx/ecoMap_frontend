import React, { useEffect, useState } from 'react'
import { BackButton, Container } from './styled'
import { Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useTheme } from 'styled-components/native'
import googlePlacesService from '../../services/googlePlacesService'
import * as Location from 'expo-location'
import { RFValue } from 'react-native-responsive-fontsize'
import { PropsStack } from '../../routes'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome6 } from '@expo/vector-icons'
import ContainerDetailsPlace from '../../components/ContainerDetailsPlace'
import Loader from '../Loader'

const locationPin = require('../../assets/images/location-pin.png');
const placePin = require('../../assets/images/trash-pin.png');

const Map = () => {
    const theme = useTheme();
    const navigation = useNavigation<PropsStack>();
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);
    const [places, setPlaces] = useState<any[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getNearbyPlaces = async () => {
            try {
                await setCurrentLocation();
                const nearbyPlaces = await googlePlacesService.getNearbyPlaces(latitude, longitude);
                setPlaces(nearbyPlaces);
            } catch (error) {
                setPlaces([]);
                Alert.alert('Erro', 'Não foi possível carregar os locais próximos!');
            }
        };

        getNearbyPlaces();
        setIsLoading(false);
    }, [latitude, longitude]);

    const setCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Aviso', 'Permissões de localização são necessárias para o funcionamento do aplicativo!');
        } else {
            let location = await Location.getCurrentPositionAsync({});
            let lat = location.coords.latitude;
            let long = location.coords.longitude;

            setLatitude(lat);
            setLongitude(long);
        }
    }

    if (isLoading) return <Loader type='load' />

    return (
        <Container>
            {selectedPlace && (<ContainerDetailsPlace selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />)}

            <BackButton activeOpacity={0.85} onPress={() => navigation.goBack()}>
                <FontAwesome6 name="arrow-left" size={RFValue(20)} color={theme.colors.lightYellow} />
            </BackButton>

            <MapView
                style={{ flex: 1, zIndex: 1 }}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03
                }}
            >
                <Marker 
                    title='Minha localização'
                    icon={locationPin}
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude
                    }}
                />

                { places.map(item => {
                    return (
                        <Marker 
                            key={item.place_id}
                            icon={placePin}
                            coordinate={{
                                latitude: item.geometry.location.lat,
                                longitude: item.geometry.location.lng
                            }}
                            onPress={() => setSelectedPlace(item)}
                        />
                    )
                })

                }
            </MapView>
        </Container>
    )
}

export default Map