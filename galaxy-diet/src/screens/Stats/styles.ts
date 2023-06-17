import styled, { css } from 'styled-components/native'

export const Container = styled.View`
flex: 1;
align-items: center;
background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`

export const Content = styled.View`
flex: 1;
align-items: center;

width: 100%;
border-radius: 20px;
padding: 32px 24px 0px 24px;

background-color: ${({ theme} ) => theme.COLORS.GRAY_7};
`

export const Title = styled.Text`
margin-bottom: 24px;
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
`