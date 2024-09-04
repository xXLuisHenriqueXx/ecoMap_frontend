import styled from "styled-components/native";
import Constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";

const statusBarHeight = Constants.statusBarHeight;  

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.bgMain};
    padding: ${statusBarHeight + RFValue(16)}px ${RFValue(16)}px 0 ${RFValue(16)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.lightYellow};
`;

export const IconButton = styled.TouchableOpacity`
`;

export const ContainerUser = styled.View`
    width: 100%;
    height: ${RFValue(200)}px;
    margin-top: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;

export const UserImageButton = styled.TouchableOpacity`
    padding: ${RFValue(4)}px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${RFValue(60)}px;
`;

export const UserImagePlaceholder = styled.View`
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;
    background-color: #110F1F;
    border-radius: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
`;

export const UserImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
width: ${RFValue(120)}px;
height: ${RFValue(120)}px;;
border-radius: ${RFValue(60)}px;
`;

export const UserNameButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const UserName = styled.Text`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.lightGreen};
    margin-top: ${RFValue(4)}px;
    font-weight: bold;
    margin-right: ${RFValue(5)}px;
`;

export const CreatedText = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const HighlightedText = styled.Text`
    color: ${({ theme }) => theme.colors.lightYellow};
`;

export const Line = styled.View`
    width: 100%;
    height: ${RFValue(2)}px;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    margin: ${RFValue(20)}px 0;
`;

export const PlacesContainer = styled.FlatList`
`;

export const PlaceTitle = styled.Text`
    font-size: ${RFValue(30)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightYellow};
    text-align: center;
`;

export const PlaceNormalText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-bottom: ${RFValue(30)}px;
`;
