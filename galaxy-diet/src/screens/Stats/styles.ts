import styled, { css } from 'styled-components/native'

export const Container = styled.View`
flex: 1;
align-items: center;
`

export const Content = styled.View`
flex: 1;
width: 100%;
align-items: center;

padding-left: 24px;
padding-right: 24px;
padding-top: 32px;
padding: 32px 24px 0px 24px;

background-color: ${({ theme} ) => theme.COLORS.GRAY_7};
border-radius: 20px;
`

export const Title = styled.Text`
margin-bottom: 24px;
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
`