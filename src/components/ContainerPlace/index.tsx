import React from 'react';
import { Address, Container, Image, InfoContainer, Line, Rating, Title } from './styled';

type Props = {
    place: {
        name: string;
        rating: number;
        address: string;
        photos?: { photo_reference: string }[] | null;
    }
}

const ContainerPlace = ({ place }: Props) => {
    return (
        <Container>
            <Image 
                source={place.photos ? { uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`} : require('../../assets/images/no-photo.jpg')}
            />

            <InfoContainer>
                <Title numberOfLines={1}>{place.name}</Title>
                <Address numberOfLines={1}>{place.address}</Address>
                <Line />
                <Rating>{place.rating ? `${place.rating} Estrelas` : 'Sem avaliações...'}</Rating>
            </InfoContainer>
        </Container>
    )
}

export default ContainerPlace;