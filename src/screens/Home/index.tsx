import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { Alert, ListRenderItem, RefreshControl } from 'react-native';
import { Container, NormalText, Title } from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components/native';
import ContainerPlace from '../../components/ContainerPlace';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Location from 'expo-location';
import googlePlacesService from '../../services/googlePlacesService';
import Navbar from '../../components/Navbar';
import Loader from '../Loader';
import { MotiView } from 'moti';

const Home = () => {
  const theme = useTheme();
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [places, setPlaces] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getNearbyPlaces();
    getMessage();
  }, [latitude, longitude]);

  const getNearbyPlaces = async () => {
    setIsLoading(true);
    try {
      await setCurrentLocation();
      const nearbyPlaces = await googlePlacesService.getNearbyPlaces(latitude, longitude);
      setPlaces(nearbyPlaces);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os locais próximos!');
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getNearbyPlaces().then(() => setRefreshing(false));
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

  const getMessage = () => {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 12) {
      setMessage('Bom dia!');
    } else if (hour >= 12 && hour < 18) {
      setMessage('Boa tarde!');
    } else {
      setMessage('Boa noite!');
    }
  }

  const renderItem: ListRenderItem<any> = ({ item, index }) => (
    <MotiView
      from={{ translateX: -300, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{
        type: 'timing',
        duration: 500,
        delay: index * 100,
      }}
    >
    <ContainerPlace
      place={{
        name: item.name,
        rating: item.rating,
        address: item.vicinity,
        photos: item.photos
      }}
    />
    </MotiView>
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
            <Title>{message}</Title>
            <NormalText>{places.length} locais próximos a você!</NormalText>
          </>
        }
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <Navbar screen="Home" />
    </LinearGradient>
  )
}

export default Home;