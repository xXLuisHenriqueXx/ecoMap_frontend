import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface screenEnabledProps {
    screenEnabled: boolean;
}

export const Container = styled.View`
    position: absolute;
    width: 100%;
    height: ${RFValue(80)}px;
    padding: 0 ${RFValue(40)}px;
    background-color: ${({ theme }) => theme.colors.dark};
    border-top-left-radius: ${RFValue(20)}px;
    border-top-right-radius: ${RFValue(20)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
`;

export const IconButtonInactive = styled.TouchableOpacity`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const IconButtonActive = styled(IconButtonInactive)`
    background-color: ${({ theme }) => theme.colors.bgIcon};
    border-radius: ${RFValue(15)}px;
`;

export const ButtonText = styled.Text<screenEnabledProps>`
    font-size: ${RFValue(8)}px;
    color: ${({ screenEnabled, theme }) => screenEnabled ? theme.colors.lightGreen : theme.colors.white};
`;