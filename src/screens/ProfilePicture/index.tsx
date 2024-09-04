import React, { useState } from 'react';
import { BackButton, Container, PickImageButton, Title, UserImage, UserImagePlaceholder } from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import userService from '../../services/userService';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes';
import { FontAwesome6 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import Loader from '../Loader';
import { Button } from 'react-native';

const ProfilePicture = () => {
    const theme = useTheme();
    const navigation = useNavigation<PropsStack>();

    const [profilePicture, setProfilePicture] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            console.error('Para escolher uma imagem, é necessário permitir o acesso à galeria de fotos!');
            return;
        }


        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            handleUpdateProfilePicture(result.assets[0].uri);
        }

        return null;
    };

    const handleUpdateProfilePicture = async (uri: string) => {
        setIsLoading(true);
        
        try {
            await userService.updateProfilePicture({ profilePicture: uri });
            setProfilePicture(uri);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRemoveProfilePicture = async () => {
        setIsLoading(true);

        try {
            await userService.removeProfilePicture();
            setProfilePicture(null);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) return <Loader type='load' />

    return (
        <LinearGradient
            colors={theme.colors.bgMain}
            style={{ flex: 1 }}
        >
            <BackButton activeOpacity={0.85} onPress={() => navigation.goBack()} >
                <FontAwesome6 name="arrow-left" size={RFValue(20)} color={theme.colors.dark} />
            </BackButton>
            <Container>
                <Title>Edição de foto de perfil</Title>

                <PickImageButton activeOpacity={0.85} onPress={pickImage} disabled={isLoading}>
                    {profilePicture ? (
                        <UserImage 
                            source={{ uri: profilePicture }}
                        />
                    ) : (
                        <UserImagePlaceholder />
                    )}
                </PickImageButton>

                <Button title='Remover foto' onPress={handleRemoveProfilePicture} />
            </Container>
        </LinearGradient>
    )
}

export default ProfilePicture;