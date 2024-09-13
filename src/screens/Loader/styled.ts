import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize";

export const ContainerInfoText = styled.View`
    position: absolute;
    width: 90%;
    bottom: ${RFValue(80)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.lightYellow};
    margin: ${RFValue(8)}px;
    text-align: center;
`;

export const NormalText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;