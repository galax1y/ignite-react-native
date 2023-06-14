import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
${({ theme }) => css`
  color: ${theme.COLORS.WHITE};
  background-color: ${theme.COLORS.GRAY_2};
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

export const Title =styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZES.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`}
`