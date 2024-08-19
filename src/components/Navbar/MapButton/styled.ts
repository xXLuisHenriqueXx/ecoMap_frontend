import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View.attrs({
    style: {
        transform: [{ translateX: -50 }]
    }
})`
    position: absolute;
    bottom: ${RFValue(30)}px;
    left: 50%;
`;

export const IconButton = styled.TouchableOpacity`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
    border-radius: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.white};
    align-items: center;
    justify-content: center;
`;