import "styled-components/native";

declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            bgMain: string[];
            bgContainer: string;
            bgIcon: string;
            bgContainerFields: string[];
            bgLine: string;
            bgButtonLight: string;
            dark: string;
            darkBlue: string;
            darkGreen: string;
            lightGreen: string;
            lightYellow: string;
            white: string;
            placeholderColor: string;
        };
    }
}