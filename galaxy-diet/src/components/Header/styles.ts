import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native'

interface HeaderContainerStyleProps {
  isHealthy?: boolean
}

export const Container = styled.View<HeaderContainerStyleProps>`
width: 100%;
height: 200px;
background-color: ${({ isHealthy, theme}) => isHealthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };

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
  font-size: ${theme.FONT_SIZES.XXL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
`

export const Span = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_2};
  font-size: ${theme.FONT_SIZES.SM}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`};
`