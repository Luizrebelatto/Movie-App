import styled from "styled-components/native";

export const Wrapper = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.neutral};
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 40px;
`;

export const ButtonWithBackground = styled.TouchableOpacity`
    height: 40px;
    width: 100%;
    border-radius: 100px;
    background-color: ${({ theme, disabled }) => disabled ? theme.colors.gray : theme.colors.primary};
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: ${({ theme, disabled }) => disabled ? theme.colors.tertiary : theme.colors.white};
    font-size: 14px;
    text-align: center;
`;

export const ButtonTransparent = styled.TouchableOpacity`
    height: 40px;
    width: 129px;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`;

export const TextWhite = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    text-align: center;
`;