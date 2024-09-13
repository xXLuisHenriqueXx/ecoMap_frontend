import styled from "styled-components/native";
import Constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.FlatList`
    padding: ${statusBarHeight + RFValue(60)}px ${RFValue(8)}px 0 ${RFValue(8)}px;
`;

export const Title = styled.Text`
    width: 100%;
    text-align: start;
    font-size: ${RFValue(40)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightYellow};
`;

export const NormalText = styled.Text`
    width: 100%;
    text-align: start;
    font-size: ${RFValue(14)}px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${RFValue(60)}px;
`;