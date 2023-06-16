import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
gap: 12px;

border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
border-radius: 6px;
height: 50px;

padding-left: 12px;
padding-right: 16px;
`

export const Timestamp = styled.View`
padding-right: 12px;
border-right-width: 1px;
border-right-color: ${({theme}) => theme.COLORS.GRAY_4};
border-right-style: solid;
`

export const TimestampText = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.XS}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
`

export const Meal = styled.Text`
${({ theme }) => css`
color: ${theme.COLORS.GRAY_2};
font-size: ${theme.FONT_SIZES.MD}px;
font-family: ${theme.FONT_FAMILY.REGULAR};
`};
flex: 1;
`

interface StatusIndicatorProps {
  isHealthy: boolean
}

export const StatusIndicator = styled.View<StatusIndicatorProps>`
height: 14px;
width: 14px;
background-color: ${({isHealthy, theme}) => isHealthy ?  theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
border-radius: 50px;
`
