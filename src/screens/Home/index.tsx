import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import logoImg from '../../assets/logo-nlw-esports.png'
import { GamingCard, GamingCardProps } from '../../components/GamingCard';
import { Headind } from '../../components/Headind';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'

import { useEffect, useState } from 'react'
import { Background } from '../../components/Background';

export function Home() {

  const [games, setGames] = useState<GamingCardProps[]>([])

  const navigation = useNavigation()

  function handleOpenGame({id, title, bannerUrl}:GamingCardProps){
    navigation.navigate('game', {id, title, bannerUrl})
  }

  useEffect(()=>{
    fetch('http://192.168.190.121:3333/games')
    .then(Response => Response.json()
    .then(data => setGames(data) ))
  }, [])


  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />
      <Headind title='Encontre seu Duo!' subtitle='Selecione o game que deseja jogar...'/>

      <FlatList 
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item})=>(
          <GamingCard 
          data={item} 
          onPress={() => handleOpenGame(item)}/>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}

        />
      
    </SafeAreaView>
    </Background>
  );
}