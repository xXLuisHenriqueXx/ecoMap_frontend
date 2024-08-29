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

const ProfilePicture = () => {
    const theme = useTheme();
    const navigation = useNavigation<PropsStack>();

    const [image, setImage] = useState<ImagePicker.ImagePickerAsset>();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]);
            return result.assets[0];
        }

        return null;
    };

    const updateProfilePicture = async () => {
        const selectedImage = await pickImage();

        if (selectedImage) {
            const formData = new FormData();
            formData.append('profilePicture', {
                name: selectedImage.uri.split('/').pop(),
                uri: selectedImage.uri,
                url: "",
                type: selectedImage.type
            } as any);

            try {
                const response = await userService.updateProfilePicture(formData);
                if (response.status === 204) {
                    console.log('Profile picture updated');
                }
            } catch (error) {
                console.error('Error updating profile picture', error);
            }
        }
    };


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

                <PickImageButton activeOpacity={0.85} onPress={updateProfilePicture}>
                    {image ? (
                        <UserImage 
                            source={{ uri: image.uri }}
                        />
                    ) : (
                        <UserImagePlaceholder />
                    )}
                </PickImageButton>
            </Container>
        </LinearGradient>
    )
}

export default ProfilePicture;