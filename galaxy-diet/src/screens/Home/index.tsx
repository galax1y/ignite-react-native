import { Text } from 'react-native'

import logo from '@assets/logo.png'
import avatar from '@assets/avatar.png'
import { Plus } from 'phosphor-react-native'

import { ButtonIcon } from '@components/ButtonIcon'
import { StatsPreview } from '@components/StatsPreview'
import { Avatar, Container, Content, Header, Logo, NewMealWrapper } from './styles'

export function Home() {
  const data = [
    {
      title: 'teste',
      data: [1, 2, 3, 4, 5]
    },
    {
      title: 'teste',
      data: [1, 2, 3, 4, 5]
    },
    {
      title: 'teste',
      data: [1, 2, 3, 4, 5]
    }
  ]
  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <Avatar
          source={avatar}
          resizeMode={'cover'}
          style={{borderRadius: 999}}
        />
      </Header>

      <Content>
        <StatsPreview />

        <NewMealWrapper>
          <Text>Refeições</Text>

          <ButtonIcon title='Nova Refeição'>
            <Plus size={16} color={'#FFF'} />
          </ButtonIcon>
        </NewMealWrapper>

        {/* Renderização das refeições ao longo dos dias */}
        {/* <MealsOverview>
          <SectionList
            sections={data}
          >

          </SectionList>
        </MealsOverview> */}
      </Content>
    </Container>
  )
}