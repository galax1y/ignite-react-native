import styled, { css } from 'styled-components/native';

interface ToggleButtonStyleProps {
  backgroundColor: string
  mainColor: string
  isSelected: boolean
}

export const Container = styled.TouchableOpacity<ToggleButtonStyleProps>`
${({ backgroundColor, mainColor, isSelected, theme }) => css`
  border: 1px solid ${ isSelected ? mainColor : theme.COLORS.GRAY_6 };
  background-color: ${ isSelected ? backgroundColor : theme.COLORS.GRAY_6 }
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