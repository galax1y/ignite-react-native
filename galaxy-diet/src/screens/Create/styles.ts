import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
width: 100%;
align-items: center;
background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Content = styled.View`
margin-top: -32px;

flex: 1;
width: 100%;
padding: 40px 24px;
border-radius: 20px;

background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Form = styled.View`
flex: 1;
gap: 24px;
`