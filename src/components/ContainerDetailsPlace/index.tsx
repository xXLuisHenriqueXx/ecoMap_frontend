import React, { useRef } from 'react'
import { AddressText, Image, Line, Rating, SaveButton, SaveButtonText, Title } from './styled'
import { RFValue } from 'react-native-responsive-fontsize'
import { FontAwesome5 } from '@expo/vector-icons'
import styled, { useTheme } from 'styled-components/native'
import { Alert, Animated } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import placeDiscardService from '../../services/placeDiscardService'

interface ContainerDetailsPlaceProps {
    selectedPlace: any;
    setSelectedPlace: any;
}

const AnimatedContainer = Animated.createAnimatedComponent(styled.View`
    position: absolute;
    bottom: 0;
    align-items: center;
    width: 100%;
    height: ${RFValue(380)}px;
    padding: ${RFValue(20)}px ${RFValue(16)}px;
    background-color: ${({ theme }) => theme.colors.dark};
    border-top-left-radius: ${RFValue(30)}px;
    border-top-right-radius: ${RFValue(30)}px;
    z-index: 5;
`);

const ContainerDetailsPlace = ({ selectedPlace, setSelectedPlace }: ContainerDetailsPlaceProps) => {
    const theme = useTheme();
    const translateY = useRef(new Animated.Value(0)).current;

    const handleSavePlace = async () => {
        await placeDiscardService.save({
            title: selectedPlace.name,
            rating: selectedPlace.rating,
            address: selectedPlace.vicinity,
            googlePlaceId: selectedPlace.place_id
        });

        setSelectedPlace(null);
        Alert.alert('Sucesso', 'Local salvo com sucesso!');
    }

    const gesture = Gesture.Pan()
        .onUpdate((event) => {
            if (event.translationY > 0 ) {
                translateY.setValue(event.translationY);
            }
        })
        .onEnd((event) => {
            if (event.translationY > 100) {
                Animated.timing(translateY, {
                    toValue: RFValue(380),
                    duration: 200,
                    useNativeDriver: true
                }).start(() => {
                    setSelectedPlace(null);
                });
            } else {
                Animated.spring(translateY, {
                    toValue: 0,
                    useNativeDriver: true
                }).start();
            }
        })

    return (
        <GestureDetector gesture={gesture}>
            <AnimatedContainer style={{ transform: [{ translateY }] }}>
                    <Line />
                    <Title>{selectedPlace.name}</Title>
                    <Image
                        source={selectedPlace.photos ? { uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${selectedPlace.photos[0].photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}` } : require('../../assets/images/no-photo.jpg')}
                    />
                    <AddressText>{selectedPlace.vicinity}</AddressText>
                    <Rating>{selectedPlace.rating ? `${selectedPlace.rating} Estrelas` : 'Sem avaliações...'}</Rating>

                    <SaveButton activeOpacity={0.85} onPress={handleSavePlace}>
                        <SaveButtonText>Salvar local</SaveButtonText>
                        <FontAwesome5
                            name="check-circle"
                            size={RFValue(24)}
                            color={theme.colors.darkGreen}
                            style={{
                                position: 'absolute',
                                right: RFValue(16),
                            }} />
                    </SaveButton>
            </AnimatedContainer>
        </GestureDetector>
    )
}

export default ContainerDetailsPlace