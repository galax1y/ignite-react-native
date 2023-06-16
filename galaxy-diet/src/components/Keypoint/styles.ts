import styled, { css } from 'styled-components/native';

interface KeypointStyleProps {
  color: 'green' | 'red' | 'neutral'
}

export const Container = styled.View<KeypointStyleProps>`
gap: 8px;
align-items: center;
justify-content: center;
border-radius: 8px;
padding: 16px;

${({ color, theme }) => {
  if (color === 'green')
    return ({ backgroundColor: theme.COLORS.GREEN_LIGHT })
  
  if (color === 'red')
    return ({ backgroundColor: theme.COLORS.RED_LIGHT })

  return ({ backgroundColor: theme.COLORS.GRAY_6 })
}}
`

export const Heading = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
`

export const Span = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_2};
  font-size: ${theme.FONT_SIZES.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`};
text-align: center;
`