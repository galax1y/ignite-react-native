import styled, { css } from 'styled-components/native';

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

export const Box = styled.View`
gap: 8px;
margin-bottom: 40px;
`

interface HeadingStyleProps {
  color: 'success' | 'fail'
}

export const Heading = styled.Text<HeadingStyleProps>`
${({ theme, color }) => css`
  color: ${ color === 'success' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
  font-size: ${theme.FONT_SIZES.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
text-align: center
`

export const Span = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`};
text-align: center;
`

export const Strong = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
`