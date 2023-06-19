import styled, { css } from 'styled-components/native';

interface ToggleButtonStyleProps {
  title: string
  backgroundColor: string
  mainColor: string
  state?: boolean
}

export const Container = styled.TouchableOpacity<ToggleButtonStyleProps>`
${({ backgroundColor, mainColor }) => css`
  border: 1px solid ${mainColor};
  background-color: ${backgroundColor};
`};

flex-direction: row;
gap: 8px;

min-height: 50px;
max-height: 50px;
border-radius: 6px;

align-items: center;
justify-content: center;
`

interface StatusIndicatorStyleProps {
  color: string
}

export const StatusIndicator = styled.View<StatusIndicatorStyleProps>`
width: 8px;
height: 8px;
border-radius: 100px;
${({ color }) => css`
  background-color: ${ color }
`};
`

export const StyledText = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-size: ${theme.FONT_SIZES.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
`