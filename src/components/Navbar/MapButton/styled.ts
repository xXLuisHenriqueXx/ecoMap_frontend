import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    align-self: center;
    align-items: center;
    position: absolute;
    margin: 0 ${RFValue(8)}px;
    bottom: ${RFValue(32)}px;
`;

export const IconButton = styled.TouchableOpacity`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
    border-radius: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.white};
    align-items: center;
    justify-content: center;
`;