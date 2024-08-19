import React from 'react';
import { ContainerInfoText, NormalText, Title } from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface LoaderProps {
    type: string;
}

const Loader = ({ type }: LoaderProps) => {
    const theme = useTheme();

    return (
        <LinearGradient
            colors={theme.colors.bgMain}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <ActivityIndicator size={RFValue(100)} color={theme.colors.lightGreen} />

            <ContainerInfoText>
                <Title>Carregando...</Title>
                {type === 'save' && <NormalText>Por favor, aguarde enquanto salvamos as informações.</NormalText>}
                {type === 'load' && <NormalText>Por favor, aguarde enquanto carregamos as informações.</NormalText>}
            </ContainerInfoText>
        </LinearGradient>
    )
}

export default Loader;