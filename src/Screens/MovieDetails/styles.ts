import styled from "styled-components/native";

export const Wrapper = styled.ScrollView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.neutral};
    /* padding-left: 16px;
    padding-right: 16px; */
`;

export const Text = styled.Text`
    font-size: 28px;
    color: yellow;
`;

export const Card = styled.View`
    width: 156px;
    height: 76px;
    border-radius: 8px;
    padding-left: 8px;
    padding-bottom: 8x;
    padding-top: 8px;
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const CardTitle = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.nunito_bold};
    font-size: 14px;
    line-height: 24px;
    margin-left: 8px;
`;

export const CardDescription = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.nunito_bold};
    font-size: 20px;
    line-height: 36px;
`;

export const Circle = styled.View`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.neutral};
    align-items: center;
    justify-content: center;
`;

export const DescriptionMovie = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    line-height: 24px;
    font-family: ${({ theme }) => theme.fonts.nunito_regular};
    text-align: justify;
    margin-bottom: 40px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.nunito_bold};
    line-height: 24px;
    margin-bottom: 16px;
`;

export const TitleMovie = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.nunito_bold};
    line-height: 24px;
    margin-bottom: 16px;
    padding-top: 32px;
`;

export const ImageMovie = styled.Image`
    width: 100%;
    height: 526px;
`;

export const WrapperCard = styled.View`
    flex-direction: row;
`;