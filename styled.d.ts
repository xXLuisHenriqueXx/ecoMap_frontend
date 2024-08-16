import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            bgMain: string[];
            bgContainer: string;
            bgIcon: string;
            bgContainerFields: string[];
            dark: string;
            darkBlue: string;
            darkGreen: string;
            lightGreen: string;
            lightYellow: string;
        }
    }
};

export { myTheme };