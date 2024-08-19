import styled from "styled-components/native";
import Constants from 'expo-constants';
import { RFValue } from "react-native-responsive-fontsize";

const statusBarHeight = Constants.statusBarHeight;

export const ScrollContainer = styled.ScrollView`
    padding-top: ${statusBarHeight + RFValue(50)}px;
    width: 100%;
`

export const LogoTextContainer = styled.View`
    align-items: center;
    margin: 0 ${RFValue(16)}px;
`;

export const LogoImage = styled.Image.attrs({
    resizeMode: 'contain'
})`
    height: ${RFValue(150)}px;
`

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightYellow};
    text-align: center;
    margin-top: ${RFValue(20)}px;
`;

export const NormalText = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-top: ${RFValue(5)}px;
`

export const ButtonsLineContainer = styled.View`
    flex: 1;
    align-items: center;
`;

export const Line = styled.View`
    margin-top: ${RFValue(18)}px;
    width: ${RFValue(140)}px;
    height: ${RFValue(5)}px;
    background-color: ${({ theme }) => theme.colors.bgLine};
    border-radius: ${RFValue(5)}px;
`

export const ButtonsContainer = styled.View`
    width: 100%;
    padding: ${RFValue(60)}px ${RFValue(16)}px 0 ${RFValue(16)}px;
`;

export const LoginButton = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(60)}px;
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: ${RFValue(5)}px;
    justify-content: center;
    align-items: center;
`;

export const RegisterButton = styled(LoginButton)`
    background-color: ${({ theme }) => theme.colors.bgButtonLight};
    border: ${RFValue(3)}px solid ${({ theme }) => theme.colors.dark};
`;

export const ButtonText = styled.Text`
    font-size: ${RFValue(22)}px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
`;

export const OrContainer = styled.View`
    width: 100%;
    margin: ${RFValue(25)}px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const OrLine = styled.View`
    width: 40%;
    height: ${RFValue(2)}px;
    background-color: ${({ theme }) => theme.colors.bgButtonLight};
    border-radius: ${RFValue(1)}px;
`;

export const OrText = styled.Text`
    font-size: ${RFValue(18)}px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.bgButtonLight};
`;
