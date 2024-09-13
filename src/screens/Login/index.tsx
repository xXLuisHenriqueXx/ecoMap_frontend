import React, { useState } from 'react'
import { BackButton, ButtonText, FieldsContainer, FieldsLineContainer, Input, InputContainer, InputLabel, InputLabelContainer, Line, LoginButton, NormalText, OrContainer, OrLine, OrText, GoogleButton, ScrollContainer, TextContainer, Title, GoogleIcon } from './styled';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native'
import { PropsStack } from '../../routes';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons"
import useAuth from '../../hook/useAuth';
import { Alert } from 'react-native';

const googleIcon = require("../../assets/images/google-icon.png")

interface fieldsProps {
    email: string;
    password: string;
}

const Login = () => {
    const theme = useTheme();
    const navigation = useNavigation<PropsStack>();
    const { login } = useAuth();

    const [fields, setFields] = useState<fieldsProps>({
        email: "",
        password: ""
    });

    const handleLogin = async () => {
        const trimmedEmail = fields.email.trim();
        const trimmedPassword = fields.password.trim();

        if (!trimmedEmail || !trimmedPassword) {
            Alert.alert("Aviso", "Preencha todos os campos!");
            return;
        }

        login(trimmedEmail, trimmedPassword);
    }

    return (
        <LinearGradient
            colors={theme.colors.bgMain}
            style={{ flex: 1 }}
        >
            <BackButton
                activeOpacity={0.85}
                onPress={() => navigation.goBack()}
            >
                <FontAwesome6 name="arrow-left" size={RFValue(20)} color={theme.colors.darkGreen} />
            </BackButton>

            <ScrollContainer>
                <TextContainer>
                    <Title>Que bom te ver novamente!</Title>
                    <NormalText>Para uma melhor experiência realize o login pelos campos abaixo.</NormalText>
                </TextContainer>

                <LinearGradient
                    colors={theme.colors.bgContainerFields}
                    style={{
                        flex: 1,
                        height: RFValue(500),
                        marginTop: RFValue(60),
                        borderTopLeftRadius: RFValue(30),
                        borderTopRightRadius: RFValue(30),
                    }}
                >
                    <FieldsLineContainer>
                        <Line />

                        <FieldsContainer>
                            <InputLabelContainer>
                                <InputLabel>Email</InputLabel>
                                <InputContainer>
                                    <MaterialIcons name="email" size={RFValue(26)} color={theme.colors.white} style={{ marginLeft: RFValue(8), marginRight: RFValue(8) }} />

                                    <Input
                                        placeholder='Digite seu email...'
                                        placeholderTextColor={theme.colors.placeholderColor}
                                        value={fields.email}
                                        onChangeText={(text) => {
                                            setFields({ ...fields, email: text })
                                        }}
                                    />
                                </InputContainer>
                            </InputLabelContainer>

                            <InputLabelContainer>
                                <InputLabel>Senha</InputLabel>
                                <InputContainer>
                                    <MaterialIcons name="lock" size={RFValue(26)} color={theme.colors.white} style={{ marginLeft: RFValue(8), marginRight: RFValue(8) }} />

                                    <Input
                                        placeholder='Digite sua senha...'
                                        placeholderTextColor={theme.colors.placeholderColor}
                                        secureTextEntry
                                        value={fields.password}
                                        onChangeText={(text) => {
                                            setFields({ ...fields, password: text })
                                        }}
                                    />
                                </InputContainer>
                            </InputLabelContainer>

                            <LoginButton
                                activeOpacity={0.85}
                                onPress={handleLogin}
                            >
                                <ButtonText>Acessar</ButtonText>
                                <FontAwesome6
                                    name="circle-arrow-right"
                                    size={RFValue(26)}
                                    color={theme.colors.white}
                                    style={{
                                        position: "absolute",
                                        right: RFValue(8)

                                    }} />
                            </LoginButton>

                            <OrContainer>
                                <OrLine />
                                <OrText>OU</OrText>
                                <OrLine />
                            </OrContainer>

                            <GoogleButton
                                activeOpacity={0.85}
                            >
                                <GoogleIcon source={googleIcon} />
                                <ButtonText>Google</ButtonText>
                                <FontAwesome6
                                    name="circle-arrow-right"
                                    size={RFValue(26)}
                                    color={theme.colors.white}
                                    style={{
                                        position: "absolute",
                                        right: RFValue(8)

                                    }} />
                            </GoogleButton>
                        </FieldsContainer>
                    </FieldsLineContainer>
                </LinearGradient>
            </ScrollContainer>
        </LinearGradient>
    )
}

export default Login;