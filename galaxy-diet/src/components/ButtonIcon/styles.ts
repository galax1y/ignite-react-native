import styled, { css } from 'styled-components/native';

interface ButtonStyleProps {
  variant?: 'default' | 'outline'
}

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
${({ theme, variant }) => css`
  background-color: ${ variant === 'outline' ? 'transparent' : theme.COLORS.GRAY_2 };
  border: 1px solid ${ variant === 'outline' ? theme.COLORS.GRAY_1 : theme.COLORS.GRAY_2};
  font-size: ${theme.FONT_SIZES.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`}

flex-direction: row;
align-items: center;
justify-content: center;
gap: 12px;

border-radius: 6px;
height: 50px;
`

export const Title =styled.Text<ButtonStyleProps>`
${({ theme, variant }) => css`
  color: ${ variant === 'outline' ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE };
  font-size: ${theme.FONT_SIZES.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`}
`