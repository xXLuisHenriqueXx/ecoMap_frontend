import React, { useState } from 'react'
import { BackButton, ButtonText, FieldsContainer, FieldsLineContainer, Input, InputContainer, InputLabel, InputLabelContainer, Line, NormalText, ScrollContainer, TextContainer, Title, RegisterButton } from './styled';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native'
import { PropsStack } from '../../routes';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome6, MaterialIcons, FontAwesome } from "@expo/vector-icons"
import useAuth from '../../hook/useAuth';
import { Alert } from 'react-native';
import Loader from '../Loader';

interface fieldsProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const theme = useTheme();
    const navigation = useNavigation<PropsStack>();
    const { register } = useAuth();

    const [fields, setFields] = useState<fieldsProps>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async () => {
        const trimmedName = fields.name.trim();
        const trimmedEmail = fields.email.trim();
        const trimmedPassword = fields.password.trim();
        const trimmedConfirmPassword = fields.confirmPassword.trim();

        if (!trimmedName || !trimmedEmail || !trimmedPassword || !trimmedConfirmPassword) {
            Alert.alert("Aviso", "Preencha todos os campos!");
            return;
        }

        if (trimmedPassword.length < 8) {
            Alert.alert("Aviso", "A senha deve conter pelo menos 8 caracteres!");
            return;
        }

        if (trimmedPassword !== trimmedConfirmPassword) {
            Alert.alert("Aviso", "As senhas são diferentes!");
            return;
        }

        setIsLoading(true);
        register(trimmedName, trimmedEmail, trimmedPassword);
        setIsLoading(false);
    }

    if (isLoading) return <Loader type='save' />

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
                    <Title>Que bom te ver por aqui!</Title>
                    <NormalText>Para uma melhor experiência realize o cadastro pelos campos abaixo.</NormalText>
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
                                <InputLabel>Usuário</InputLabel>
                                <InputContainer>
                                    <FontAwesome name="user" size={RFValue(26)} color={theme.colors.white} style={{ marginLeft: RFValue(8), marginRight: RFValue(8) }} />

                                    <Input
                                        placeholder='Digite seu nome de usuário...'
                                        placeholderTextColor={theme.colors.placeholderColor}
                                        value={fields.name}
                                        onChangeText={(text) => {
                                            setFields({ ...fields, name: text })
                                        }}
                                    />
                                </InputContainer>
                            </InputLabelContainer>

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

                            <InputLabelContainer>
                                <InputLabel>Confirmar senha</InputLabel>
                                <InputContainer>
                                    <MaterialIcons name="lock" size={RFValue(26)} color={theme.colors.white} style={{ marginLeft: RFValue(8), marginRight: RFValue(8) }} />

                                    <Input
                                        placeholder='Digite sua senha novamente...'
                                        placeholderTextColor={theme.colors.placeholderColor}
                                        secureTextEntry
                                        value={fields.confirmPassword}
                                        onChangeText={(text) => {
                                            setFields({ ...fields, confirmPassword: text })
                                        }}
                                    />
                                </InputContainer>
                            </InputLabelContainer>

                            <RegisterButton
                                activeOpacity={0.85}
                                onPress={handleRegister}
                            >
                                <ButtonText>Acessar</ButtonText>
                                <FontAwesome6
                                    name="circle-arrow-right"
                                    size={RFValue(26)}
                                    color={theme.colors.white}
                                    style={{
                                        position: "absolute",
                                        right: RFValue(8),

                                    }} />
                            </RegisterButton>
                        </FieldsContainer>
                    </FieldsLineContainer>
                </LinearGradient>
            </ScrollContainer>
        </LinearGradient>
    )
}

export default Register;