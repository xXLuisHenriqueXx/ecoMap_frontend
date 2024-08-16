import React from 'react'
import { ButtonsContainer, ButtonsLineContainer, ButtonText, Line, LoginButton, LogoImage, LogoTextContainer, NormalText, OrContainer, OrLine, OrText, RegisterButton, ScrollContainer, Title } from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome6 } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes';

const logoImage = require('../../../assets/logo.png');

const Welcome = () => {
  const theme = useTheme();
  const navigation = useNavigation<PropsStack>();

  const handleNavigateToLogin = () => {
    navigation.navigate("Login");
  };

  const handleNavigateToRegister = () => {
    navigation.navigate("Register");
  };

  return (
      <LinearGradient
        colors={theme.colors.bgMain}
        style={{ flex: 1 }}
      >
        <ScrollContainer>
          <LogoTextContainer>
            <LogoImage 
              source={logoImage}
            />
            <Title>Bem-vindo ao EcoMap</Title>
            <NormalText>Para uma melhor experiência realize o login ou cadastre-se pelos campos abaixo.</NormalText>
          </LogoTextContainer>

          <LinearGradient
            colors={theme.colors.bgContainerFields}
            style={{
              flex: 1,
              height: RFValue(400),
              marginTop: RFValue(60),
              borderTopLeftRadius: RFValue(30),
              borderTopRightRadius: RFValue(30),
            }}
          >
            <ButtonsLineContainer>
              <Line />

              <ButtonsContainer>
                <LoginButton
                  activeOpacity={0.85}
                  onPress={handleNavigateToLogin}
                >
                  <ButtonText>Acessar</ButtonText>
                  <FontAwesome6 name="circle-arrow-right" size={RFValue(26)} color={theme.colors.white} style={{ position: "absolute", right: RFValue(18), top: RFValue(16) }} />
                </LoginButton>

                <OrContainer>
                  <OrLine />
                  <OrText>OU</OrText>
                  <OrLine />
                </OrContainer>

                <RegisterButton
                  activeOpacity={0.85}
                  onPress={handleNavigateToRegister}
                >
                  <ButtonText>Cadastrar</ButtonText>

                  <FontAwesome6 name="circle-arrow-right" size={RFValue(26)} color={theme.colors.white} style={{ position: "absolute", right: RFValue(18), top: RFValue(14) }} />
                </RegisterButton>
              </ButtonsContainer>
            </ButtonsLineContainer>
          </LinearGradient>
        </ScrollContainer>
      </LinearGradient>
  )
}

export default Welcome;