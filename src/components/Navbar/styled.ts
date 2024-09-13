import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface screenEnabledProps {
    screenEnabled: boolean;
}

export const Container = styled.View`
    position: absolute;
    width: 100%;
    height: ${RFValue(60)}px;
    padding: 0 ${RFValue(8)}px;
    background-color: ${({ theme }) => theme.colors.dark};
    border-top-left-radius: ${RFValue(20)}px;
    border-top-right-radius: ${RFValue(20)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
`;

export const IconButtonInactive = styled.TouchableOpacity`
    width: ${RFValue(40)}px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const IconButtonActive = styled(IconButtonInactive)`
    border-top-width: ${RFValue(2)}px;
    border-color: ${({ theme }) => theme.colors.lightGreen};
    border-radius: ${RFValue(4)}px;
`;

export const ButtonText = styled.Text<screenEnabledProps>`
    font-size: ${RFValue(8)}px;
    color: ${({ screenEnabled, theme }) => screenEnabled ? theme.colors.lightGreen : theme.colors.white};
`;