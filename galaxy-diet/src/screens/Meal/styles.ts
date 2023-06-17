import styled, { css } from 'styled-components/native'

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Content = styled.View`
margin-top: -32px;

flex: 1;
gap: 24px;
width: 100%;
padding: 40px 24px;
border-radius: 20px;

background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Title = styled.Text`
${({ theme }) => css`
color: ${theme.COLORS.GRAY_1};
font-size: ${theme.FONT_SIZES.LG}px;
font-family: ${theme.FONT_FAMILY.BOLD};
`};
`

export const Description = styled.Text`
${({ theme }) => css`
color: ${theme.COLORS.GRAY_2};
font-size: ${theme.FONT_SIZES.MD}px;
font-family: ${theme.FONT_FAMILY.REGULAR};
`};
`

export const DateTitle = styled.Text`
${({ theme }) => css`
color: ${theme.COLORS.GRAY_1};
font-size: ${theme.FONT_SIZES.SM}px;
font-family: ${theme.FONT_FAMILY.BOLD};
`};
`

export const Date = styled.Text`
${({ theme }) => css`
color: ${theme.COLORS.GRAY_2};
font-size: ${theme.FONT_SIZES.MD}px;
font-family: ${theme.FONT_FAMILY.REGULAR};
`};
`

export const StatusIndicator = styled.View`
flex: 0;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 8px;

max-width: 144px;

min-height: 34px;
max-height: 34px;

border-radius: 999px;
background-color: ${({theme}) => theme.COLORS.GRAY_6};
`

export const StatusIndicatorBall = styled.View`
width: 8px;
height: 8px;
border-radius: 999px;
background-color: ${({theme}) => theme.COLORS.GREEN_DARK};
`

export const StatusIndicatorText = styled.Text`
${({ theme }) => css`
color: ${theme.COLORS.GRAY_1};
font-size: ${theme.FONT_SIZES.SM}px;
font-family: ${theme.FONT_FAMILY.REGULAR};
`};
`
