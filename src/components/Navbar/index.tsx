import React from 'react'
import { ButtonText, Container, IconButtonActive, IconButtonInactive } from './styled'
import { PropsStack } from '../../routes'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import MapButton from './MapButton'

interface Props {
    screen: string
}

const Navbar = ({ screen }: Props) => {
    const navigation = useNavigation<PropsStack>();
    const theme = useTheme();

    const navigateToNearbyPlaces = () => {
        navigation.navigate('Home');
    }

    const navigateToUser = () => {
        navigation.navigate('User');
    }

    const size = RFValue(24);
    const colorPlace = screen === 'Home' ? theme.colors.lightGreen : theme.colors.white;
    const colorUser = screen === 'User' ? theme.colors.lightGreen : theme.colors.white;
    const colorBlank = screen === 'Blank' ? theme.colors.lightGreen : theme.colors.white;
    const iconPlace = 'trash';
    const iconUser = screen === 'User' ? 'user-alt' : 'user';
    const iconBlank = 'meh-blank'

    return (
        <Container
            style={{
                shadowColor: theme.colors.lightGreen,
                elevation: RFValue(20)
            }}
        >
            <MapButton />

            {screen === 'Home' ? (
                <IconButtonActive activeOpacity={0.85}>
                    <FontAwesome5 name={iconPlace} size={size} color={colorPlace} />
                    <ButtonText screenEnabled={true}>Locais</ButtonText>
                </IconButtonActive>
            ) : (
                <IconButtonInactive activeOpacity={0.85} onPress={navigateToNearbyPlaces}>
                    <FontAwesome5 name={iconPlace} size={size} color={colorPlace} />
                    <ButtonText screenEnabled={false}>Locais</ButtonText>
                </IconButtonInactive>
            )}

            {screen === 'Blank' ? (
                <IconButtonActive activeOpacity={0.85} style={{marginRight: RFValue(32)}}>
                    <FontAwesome5 name={iconBlank} size={size} color={colorBlank} />
                    <ButtonText screenEnabled={true}>Blank</ButtonText>
                </IconButtonActive>
            ) : (
                <IconButtonInactive activeOpacity={0.85} style={{marginRight: RFValue(32)}} onPress={() => { }}>
                    <FontAwesome5 name={iconBlank} size={size} color={colorBlank} />
                    <ButtonText screenEnabled={false}>Blank</ButtonText>
                </IconButtonInactive>
            )}

            {screen === 'Blank' ? (
                <IconButtonActive activeOpacity={0.85} style={{marginLeft: RFValue(32)}}>
                    <FontAwesome5 name={iconBlank} size={size} color={colorBlank} />
                    <ButtonText screenEnabled={true}>Blank</ButtonText>
                </IconButtonActive>
            ) : (
                <IconButtonInactive activeOpacity={0.85} onPress={() => { }} style={{marginLeft: RFValue(32)}}>
                    <FontAwesome5 name={iconBlank} size={size} color={colorBlank} />
                    <ButtonText screenEnabled={false}>Blank</ButtonText>
                </IconButtonInactive>
            )}

            {screen === 'User' ? (
                <IconButtonActive activeOpacity={0.85}>
                    <FontAwesome5 name={iconUser} size={size} color={colorUser} />
                    <ButtonText screenEnabled={true}>Usuário</ButtonText>
                </IconButtonActive>
            ) : (
                <IconButtonInactive activeOpacity={0.85} onPress={navigateToUser}>
                    <FontAwesome5 name={iconUser} size={size} color={colorUser} />
                    <ButtonText screenEnabled={false}>Usuário</ButtonText>
                </IconButtonInactive>
            )}
        </Container>
    )
}

export default Navbar;