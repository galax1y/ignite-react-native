import { ArrowLeft } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
background-color: ${({ theme }) => theme.COLORS.GRAY_5};
height: 132px;
width: 100%;
align-items: center;
justify-content: center;
`

export const BackButton = styled.TouchableOpacity`
position: absolute;
top: 56px;
left: 24px;
color: ${({theme}) => theme.COLORS.RED_DARK};
`

export const ArrowLeftIcon = styled(ArrowLeft)``

export const Heading = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
`