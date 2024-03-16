import styled from "styled-components/native";

export const Title = styled.Text`
    font-size: 16px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.nunito_bold};
    color: ${({ theme, disabled }) => !disabled ? "#A9A9A9" : theme.colors.primary};
`;

export const Button = styled.TouchableOpacity`
    width: 50%;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.neutral};
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme, disabled }) => !disabled ? theme.colors.neutral : theme.colors.primary};
`;

export const HeaderTitle = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.nunito_regular};
`;
