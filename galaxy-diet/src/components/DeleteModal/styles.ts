import styled, { css } from 'styled-components/native';

export const Container = styled.Modal``

export const Content = styled.View`
flex: 1;
justify-content: space-between;

margin: auto 24px;
padding: 40px 24px 24px 24px;
border-radius: 8px;

min-height: 192px;
max-height: 192px;

border: 1px solid ${({ theme }) => theme.COLORS.GRAY_6};
background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`

export const Title = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_2};
  font-size: ${theme.FONT_SIZES.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
text-align: center;
`

export const Row = styled.View`
width: 100%;

flex-direction: row;
justify-content: space-between;
gap: 12px;
`