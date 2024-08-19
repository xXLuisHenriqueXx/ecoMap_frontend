import React, { useEffect, useState } from 'react';
import { Alert, ListRenderItem } from 'react-native';
import { Container, Line, NormalText, Title } from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components/native';
import ContainerPlace from '../../components/ContainerPlace';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Location from 'expo-location';
import googlePlacesService from '../../services/googlePlacesService';
import Navbar from '../../components/Navbar';
import Loader from '../Loader';

const Home = () => {
  const theme = useTheme();
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [places, setPlaces] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getNearbyPlaces = async () => {
      try {
        await setCurrentLocation();
        const nearbyPlaces = await googlePlacesService.getNearbyPlaces(latitude, longitude);
        setPlaces(nearbyPlaces);
      } catch (error) {
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

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <ContainerPlace
      place={{
        name: item.name,
        rating: item.rating,
        address: item.vicinity,
        photos: item.photos
      }}
    />
  )

  if (isLoading) return <Loader type='load' />

  return (
    <LinearGradient
      colors={theme.colors.bgMain}
      style={{ flex: 1 }}
    >
      <Container
        style={{ marginBottom: RFValue(80) }}
        data={places}
        ListHeaderComponent={
          <>
            <Title>Locais próximos</Title>
            <NormalText>{places.length} locais próximos a você!</NormalText>
            <Line />
          </>
        }
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
      <Navbar screen="Home" />
    </LinearGradient>
  )
}

export default Home;