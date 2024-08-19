import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Line = styled.View`
    width: ${RFValue(140)}px;
    height: ${RFValue(5)}px;
    background-color: ${({ theme }) => theme.colors.bgIcon};
    border-radius: ${RFValue(5)}px;
`

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightYellow};
    margin-top: ${RFValue(20)}px;
`;

export const Image = styled.Image`
    width: ${RFValue(140)}px;
    height: ${RFValue(140)}px;
    margin: ${RFValue(10)}px 0;
    border-radius: ${RFValue(5)}px;
`;

export const AddressText = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.white};
`

export const Rating = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    margin-top: ${RFValue(10)}px;
`;

export const SaveButton = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(50)}px;
    margin-top: ${RFValue(20)}px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border-radius: ${RFValue(5)}px;
`;

export const SaveButtonText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkGreen};
    text-transform: uppercase;
`;