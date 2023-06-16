import styled, { css } from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native'

export const Container = styled.TouchableOpacity`
width: 100%;
height: 102px;
border-radius: 8px;

justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
`

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
  weight: 'bold',
}))`

position: absolute;
top: 0;
right: 0;
margin: 8px;
`

export const Heading = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.XXL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
`

export const Span = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_2};
  font-size: ${theme.FONT_SIZES.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`}

text-align: center;
`