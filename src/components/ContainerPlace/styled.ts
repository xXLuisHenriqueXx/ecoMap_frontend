import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(100)}px;
    padding: ${RFValue(20)}px ${RFValue(18)}px;
    background-color: ${({ theme }) => theme.colors.bgContainer};
    border-radius: ${RFValue(5)}px;
    margin-bottom: ${RFValue(20)}px;
    flex-direction: row;
`;

export const Image = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(5)}px;
    margin-right: ${RFValue(10)}px;
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
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
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