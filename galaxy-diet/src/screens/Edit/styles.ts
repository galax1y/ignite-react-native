import styled from 'styled-components/native'

export const Container = styled.View`
flex: 1;
align-items: center;
`

export const Content = styled.View`
margin-top: -32px;

flex: 1;
width: 100%;
padding: 40px 24px;
border-radius: 20px;

background-color: ${({ theme }) => theme.COLORS.GRAY_7};
justify-content: space-between;
`

export const Form = styled.ScrollView`
flex: 1;
margin-bottom: 20px;
`