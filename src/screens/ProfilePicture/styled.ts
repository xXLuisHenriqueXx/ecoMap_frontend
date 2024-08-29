import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 0 ${RFValue(16)}px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: ${ statusBarHeight + RFValue(16)}px;
    left: ${RFValue(16)}px;
    height: ${RFValue(40)}px;
    width: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border-radius: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const Title = styled.Text`
    font-size: ${RFValue(22)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightYellow};
    text-align: center;
    margin-top: ${statusBarHeight + RFValue(60)}px;
    margin-bottom: ${RFValue(16)}px;
`;

export const PickImageButton = styled.TouchableOpacity`
`;

export const UserImage = styled.Image`
    width: ${RFValue(200)}px;
    height: ${RFValue(200)}px;
    border: ${RFValue(4)}px solid ${({ theme }) => theme.colors.white};
    border-radius: ${RFValue(100)}px;
    margin-bottom: ${RFValue(16)}px;
`;

export const UserImagePlaceholder = styled.View`
    width: ${RFValue(200)}px;
    height: ${RFValue(200)}px;
    border: ${RFValue(4)}px solid ${({ theme }) => theme.colors.white};
    border-radius: ${RFValue(100)}px;
    background-color: ${({ theme }) => theme.colors.dark};
    margin-bottom: ${RFValue(16)}px;
`;