import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(100)}px;
    padding: ${RFValue(16)}px;
    background-color: ${({ theme }) => theme.colors.bgContainer};
    margin-bottom: ${RFValue(12)}px;
    flex-direction: row;
`;

export const Image = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    margin-right: ${RFValue(8)}px;
`;

export const InfoContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
`;

export const Line = styled.View`
    width: 100%;
    height: ${RFValue(1)}px;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    opacity: 0.2;
`;

export const Title = styled.Text`
    font-size: ${RFValue(12)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightYellow};
`;

export const Address = styled.Text`
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Rating = styled.Text`
    font-size: ${RFValue(8)}px;
    color: ${({ theme }) => theme.colors.white};
`;