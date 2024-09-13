import React, { useEffect, useState } from 'react'
import { Container, ContainerUser, CreatedText, Header, HighlightedText, IconButton, Line, PlaceNormalText, PlacesContainer, PlaceTitle, Title, UserImage, UserImageButton, UserImagePlaceholder, UserName, UserNameButton } from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components/native';
import Navbar from '../../components/Navbar';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert, ListRenderItem } from 'react-native';
import useAuth from '../../hook/useAuth';
import { User as UserEntitie } from '../../entities/User';
import userService from '../../services/userService';
import getDate from '../../utils/getDate';
import Loader from '../Loader';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes';
import placeDiscardService from '../../services/placeDiscardService';
import { PlaceDiscard } from '../../entities/PlaceDiscard';
import ContainerPlace from '../../components/ContainerPlace';

const User = () => {
  const theme = useTheme();
  const navigation = useNavigation<PropsStack>();
  const [userInfo, setUserInfo] = useState<UserEntitie | undefined>();
  const [places, setPlaces] = useState<any[]>([]);

  const API_BASE_URL = process.env.EXPO_PUBLIC_API_KEY;

  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert('Atenção', 'Deseja realmente sair do aplicativo?', [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Sair',
        onPress: () => { logout() }
      }
    ]);
  }

  const handleUserInfo = async () => {
    const { data } = await userService.getUserProfile();

    setUserInfo(data);
  }

  const handleGetUserPlaces = async () => {
    const { data } = await placeDiscardService.getPlaces();

    setPlaces(data);
  }

  useEffect(() => {
    handleGetUserPlaces();
  }, []);

  useEffect(() => {
    handleUserInfo();
  }, []);

  const handleNavigateToUpdateProfile = () => {
    navigation.navigate('UpdateProfile', { userInfo: userInfo });
  }

  const handleNavigateToProfilePicture = () => {
    navigation.navigate('ProfilePicture');
  }

  if (!userInfo) return <Loader type='load' />

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <ContainerPlace
      place={{
        name: item.title,
        rating: item.rating,
        address: item.address,
        photos: null
      }}
    />
  )

  return (
    <LinearGradient
      colors={theme.colors.bgMain}
      style={{ flex: 1 }}
    >
      <Container>
        <Header>
          <IconButton activeOpacity={0.85} onPress={() => { }}>
            <FontAwesome5 name="question-circle" size={RFValue(26)} color={theme.colors.lightGreen} />
          </IconButton>
          <Title>Meu perfil</Title>
          <IconButton activeOpacity={0.85} onPress={handleLogout}>
            <Feather name="log-out" size={RFValue(26)} color={theme.colors.lightGreen} />
          </IconButton>
        </Header>

        <ContainerUser>
          <UserImageButton activeOpacity={0.85} onPress={handleNavigateToProfilePicture}>
            {userInfo?.profilePicture ? (
              <UserImage
                source={{ uri: `${API_BASE_URL}/${userInfo?.profilePicture}` }}
              />
            ) : (
              <UserImagePlaceholder />
            )}
          </UserImageButton>

          <UserNameButton activeOpacity={0.8} onPress={handleNavigateToUpdateProfile}>
            <UserName>{userInfo?.name}</UserName>
            <FontAwesome5 name='edit' size={25} color={theme.colors.lightGreen} />
          </UserNameButton>

          <CreatedText>Usuário desde: <HighlightedText>{getDate(userInfo?.createdAt ?? '')}</HighlightedText></CreatedText>
        </ContainerUser>

        <Line />

        <PlacesContainer 
          style={{ marginBottom: RFValue(80) }}
          data={places}
          ListHeaderComponent={
            <>
              <PlaceTitle>Locais salvos</PlaceTitle>
              <PlaceNormalText>{places.length} locais salvos!</PlaceNormalText>
            </>
          }
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </Container>
      <Navbar screen="User" />
    </LinearGradient>

  )
}

export default User;