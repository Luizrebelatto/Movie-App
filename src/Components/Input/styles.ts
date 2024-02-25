import styled from "styled-components/native";

export const Wrapper = styled.View`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.white};
    padding: 16px 12px;
    flex-direction: row;
    margin-bottom: 48px;
`;

export const InputField = styled.TextInput`
    width: 85%;
    color: ${({ theme }) => theme.colors.white};
    padding-left: 12px;
`;
