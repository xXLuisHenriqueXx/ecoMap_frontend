import styled from "styled-components/native";
import Constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";

const statusBarHeight = Constants.statusBarHeight;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: ${ statusBarHeight + RFValue(16)}px;
    left: ${RFValue(16)}px;
    height: ${RFValue(40)}px;
    width: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.lightGreen};
    border-radius: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const ScrollContainer = styled.ScrollView`
    padding-top: ${statusBarHeight + RFValue(80)}px;
    width: 100%;
`

export const TextContainer = styled.View`
    align-items: center;
    margin: 0 ${RFValue(16)}px;
`;

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

export const FieldsLineContainer = styled.View`
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

export const FieldsContainer = styled.View`
    width: 100%;
    padding: ${RFValue(50)}px ${RFValue(16)}px 0 ${RFValue(16)}px;
`;

export const InputLabelContainer = styled.View`
    margin-bottom: ${RFValue(25)}px;
`;

export const InputLabel = styled.Text`
    font-size: ${RFValue(12)}px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkGreen};
    margin-left: ${RFValue(16)}px;
`;

export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.bgButtonLight};
    border: ${RFValue(2)}px solid ${({ theme }) => theme.colors.darkGreen};
    border-radius: ${RFValue(5)}px;
`;

export const Input = styled.TextInput`
    flex: 1;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(18)}px;
`;

export const RegisterButton = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(60)}px;
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: ${RFValue(5)}px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: ${RFValue(22)}px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
`;