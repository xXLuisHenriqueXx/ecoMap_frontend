import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: ${ statusBarHeight + RFValue(16)}px;
    left: ${RFValue(16)}px;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(20)}px;
    background-color: ${({ theme }) => theme.colors.dark};
    z-index: 2;
`;