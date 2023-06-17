import styled, { css } from 'styled-components/native';

export const StyledText = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_2};
  font-size: ${theme.FONT_SIZES.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
margin-bottom: 4px;
`