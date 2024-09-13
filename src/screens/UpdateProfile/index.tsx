import React, { useEffect, useState } from 'react'
import { BackButton, ButtonText, FieldsContainer, FieldsLineContainer, Input, InputContainer, InputLabel, InputLabelContainer, Line, NormalText, ScrollContainer, TextContainer, Title, UpdateButton } from './styled';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native'
import { PropsNavigationStack, PropsStack } from '../../routes';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome6, MaterialIcons, FontAwesome } from "@expo/vector-icons"
import useAuth from '../../hook/useAuth';
import { Alert } from 'react-native';
import userService from '../../services/userService';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Loader from '../Loader';

interface fieldsProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type Props = NativeStackScreenProps<PropsNavigationStack, "UpdateProfile">;

const UpdateProfile = ({ route }: Props) => {
    const theme = useTheme();
    const navigation = useNavigation<PropsStack>();

    const [fields, setFields] = useState<fieldsProps>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const { logout } = useAuth();
    const { userInfo } = route.params || {};

    const handleUpdate = async () => {
        const trimmedName = fields.name.trim();
        const trimmedEmail = fields.email.trim();
        setFields({
            name: trimmedName,
            email: trimmedEmail,
            password: fields.password,
            confirmPassword: fields.confirmPassword
        });

        if (fields.name === "") {
            Alert.alert("Aviso", "Preencha o campo de nome!");
            return;
        } else if (fields.email === "") {
            Alert.alert("Aviso", "Preencha o campo de email!");
            return;
        } else {
            setIsLoading(true);
            const response = await userService.updateUserProfile(fields);
            setIsLoading(false);

            if (response.status === 400) {
                Alert.alert("Erro", "Email já cadastrado!");
                return;
            }

            if (fields.email !== userInfo?.email) logout();

            Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
            navigation.navigate("Home");
        }

    }

    const handleSetInfos = async () => {
        setFields({
            ...fields,
            name: userInfo?.name || "",
            email: userInfo?.email || ""
        })
    }

    useEffect(() => {
        handleSetInfos();
    }, []);

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
                    <Title>Edição de perfil</Title>
                    <NormalText>Nesta tela você pode alterar as informações da sua conta.</NormalText>
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

                            <UpdateButton
                                activeOpacity={0.85}
                                onPress={handleUpdate}
                            >
                                <ButtonText>Salvar</ButtonText>
                                <FontAwesome6
                                    name="circle-arrow-right"
                                    size={RFValue(26)}
                                    color={theme.colors.white}
                                    style={{
                                        position: "absolute",
                                        right: RFValue(8),

                                    }} />
                            </UpdateButton>
                        </FieldsContainer>
                    </FieldsLineContainer>
                </LinearGradient>
            </ScrollContainer>
        </LinearGradient>
    )
}

export default UpdateProfile;