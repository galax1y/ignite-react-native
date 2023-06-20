import { Alert, SectionList, View } from 'react-native'

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
import { useEffect, useState } from 'react'
import { dayGetAll } from '@storage/day/day-get-all'
import { DayProps } from 'src/@types/storage'

export function Home() {
  // const data = [
  //   {
  //     day: 'Primeiro',
  //     data: [
  //       {
  //         time: '19:00',
  //         name: 'X-tudo',
  //         isHealthy: false,
  //         description: '',
  //       },
  //       {
  //         time: '18:00',
  //         name: 'Sushi',
  //         isHealthy: true,
  //         description: '',
  //       },
  //     ],
  //   },
  //   {
  //     day: 'Segundo',
  //     data: [
  //       {
  //         time: '20:00',
  //         name: 'X-Nada',
  //         isHealthy: true,
  //         description: '',
  //       },
  //       {
  //         time: '14:00',
  //         name: 'Temaki',
  //         isHealthy: false,
  //         description: '',
  //       },
  //     ]
  //   },
  //   {
  //     day: 'Terceiro',
  //     data: [
  //       {
  //         time: '20:00',
  //         name: 'X-Vento',
  //         isHealthy: true,
  //         description: '',
  //       },
  //       {
  //         time: '14:00',
  //         name: 'Hot',
  //         isHealthy: false,
  //         description: '',
  //       },
  //     ]
  //   },
  //   {
  //     day: 'Quarto',
  //     data: [
  //       {
  //         time: '15:00',
  //         name: 'X-Algo',
  //         isHealthy: true,
  //         description: '',
  //       },
  //       {
  //         time: '11:00',
  //         name: 'Uramaki',
  //         isHealthy: false,
  //         description: '',
  //       },
  //     ]
  //   }
  // ]

  const [data, setData] = useState<DayProps[]>([])

  async function fetchData() {
    try {
      const days = await dayGetAll() 
      setData(days)
    } catch (err) {
      console.log(err)
      Alert.alert('Something went wrong.')
    }

  }

  useEffect(() => {
    fetchData()
  })

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
          <ButtonIcon onPress={() => navigation.navigate('create')} title='Nova Refeição'>
            <Plus size={16} color={'#FFF'} />
          </ButtonIcon>
        </NewMealWrapper>

        {/* Renderização das refeições ao longo dos dias */}
        <MealsOverview>
          <SectionList
            sections={data}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={() => <View style={{ marginTop: 20 }} />}
            renderSectionHeader={({section: { day }}) => (
              <SectionHeader>
                {day.getDate()}
              </SectionHeader>
            )}
            renderItem={({ item }) => {
              return (
                <MealCard
                  {...item}
                />
              )
            }}
            showsVerticalScrollIndicator={false}
            fadingEdgeLength={100}
            style={{ marginBottom: 24 }}
          />
        </MealsOverview>
      </Content>
    </Container>
  )
}