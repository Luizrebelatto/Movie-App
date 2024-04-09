import styled from "styled-components/native";

export const View = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.neutral};
    height: 108px;
    padding-left: 26px;
    padding-right: 26px;
`;

export const Content = styled.View<{ statusBarHeight?: number }>`
    margin-top: ${({ statusBarHeight }) => statusBarHeight}px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: white;
    font-size: 22px;
`;

export const ButtonMenu = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
`;