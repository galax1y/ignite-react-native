import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
flex: 1;
align-items: center;
padding: 0 24px;

background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Header = styled.View`
margin-top: 20px;
width: 100%;

flex-direction: row;
justify-content: space-between;
`

export const Logo = styled.Image`
width: 82px;
height: 40px;
`

export const Avatar = styled.Image`
width: 40px;
height: 40px;
`

export const Content = styled.View`
margin-top: 32px;
flex: 1;
width: 100%;
`

export const NewMealWrapper = styled.View`
margin-top: 40px;
gap: 8px;
`

export const NewMealText = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`}
`

export const MealsOverview = styled.View`
flex: 1;
`

export const SectionHeader = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};

margin-top: 32px;
margin-bottom: 8px;
`