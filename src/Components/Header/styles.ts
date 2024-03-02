import styled from "styled-components/native";

export const View = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.neutral};
    height: 108px;
    padding-left: 26px;
    padding-right: 26px;
`;

export const Content = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: white;
    font-size: 22;
`;