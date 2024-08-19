import React from 'react'
import { Container, IconButton } from './styled'
import { FontAwesome5 } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { PropsStack } from '../../../routes'
import { useNavigation } from '@react-navigation/native'

const MapButton = () => {
    const theme = useTheme();
    const navigation = useNavigation<PropsStack>();

    const handleNavigateToMap = () => {
        navigation.navigate('Map');
    }

    return (
        <Container>
            <IconButton activeOpacity={0.85} onPress={handleNavigateToMap}>
                <FontAwesome5 name="map-marker-alt" size={RFValue(30)} color={theme.colors.darkGreen} />
            </IconButton>
        </Container>
    )
}

export default MapButton