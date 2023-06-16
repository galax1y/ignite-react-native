import { SectionList, View } from 'react-native'

import logo from '@assets/logo.png'
import avatar from '@assets/avatar.png'
import { Plus } from 'phosphor-react-native'

import { ButtonIcon } from '@components/ButtonIcon'
import { StatsPreview } from '@components/StatsPreview'
import { MealCard } from '@components/MealCard'

import {
  Avatar,
  Container,
  Content,
  Header,
  Logo,
  MealsOverview,
  NewMealText,
  NewMealWrapper,
  SectionHeader,
} from './styles'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const data = [
    {
      title: 'Primeiro',
      data: [
        {
          time: '19:00',
          name: 'X-tudo',
          isHealthy: false,
        },
        {
          time: '18:00',
          name: 'Sushi',
          isHealthy: true,
        },
      ],
    },
    {
      title: 'Segundo',
      data: [
        {
          time: '20:00',
          name: 'X-Nada',
          isHealthy: true,
        },
        {
          time: '14:00',
          name: 'Temaki',
          isHealthy: false,
        },
      ]
    },
    {
      title: 'Terceiro',
      data: [
        {
          time: '20:00',
          name: 'X-Vento',
          isHealthy: true,
        },
        {
          time: '14:00',
          name: 'Hot',
          isHealthy: false,
        },
      ]
    },
    {
      title: 'Quarto',
      data: [
        {
          time: '15:00',
          name: 'X-Algo',
          isHealthy: true,
        },
        {
          time: '11:00',
          name: 'Uramaki',
          isHealthy: false,
        },
      ]
    }
  ]

  const navigation = useNavigation()

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
        <StatsPreview handlePress={() => {
          navigation.navigate('stats')
        }} />

        <NewMealWrapper>
          <NewMealText>Refeições</NewMealText>
          <ButtonIcon title='Nova Refeição'>
            <Plus size={16} color={'#FFF'} />
          </ButtonIcon>
        </NewMealWrapper>

        {/* Renderização das refeições ao longo dos dias */}
        <MealsOverview>
          <SectionList
            sections={data}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={() => <View style={{ marginTop: 20 }} />}
            renderSectionHeader={({section: {title}}) => (
              <SectionHeader>
                {title}
              </SectionHeader>
            )}
            renderItem={({item}) => {
              return <MealCard {...item} />
            }}
            showsVerticalScrollIndicator={false}
            fadingEdgeLength={200}
          />
        </MealsOverview>
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