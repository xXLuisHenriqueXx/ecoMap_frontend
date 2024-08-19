import styled from "styled-components/native";
import Constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.FlatList`
    padding: ${statusBarHeight + RFValue(60)}px ${RFValue(16)}px 0 ${RFValue(16)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightYellow};
    text-align: center;
`;

export const NormalText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;

export const Line = styled.View`
    width: 100%;
    height: ${RFValue(2)}px;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    margin: ${RFValue(20)}px 0 ${RFValue(40)}px 0;
`;