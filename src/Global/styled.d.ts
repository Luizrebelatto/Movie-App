import "styled-components/native"

declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            neutral: string;
            gray: string;
            white: string;
            primary: string;
            tertiary: string;
        },
        
        fonts: {
            nunito_regular: string;
            nunito_bold: string;
            roboto_regular: string;
            roboto_medium: string;
        }
    }
}