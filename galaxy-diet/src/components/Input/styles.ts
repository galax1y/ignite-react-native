import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
flex: 1;

min-height: 48px;
max-height: 48px;

border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
border-radius: 6px;
padding: 16px;

${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`};
`