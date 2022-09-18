import { SafeAreaView } from 'react-native-safe-area-context'

import { useRoute, useNavigation } from '@react-navigation/native'

import { Background } from '../../components/Background';
 
import logoImg from '../../assets/logo-nlw-esports.png'
import { styles } from './styles';
import { GameParams } from '../../@types/@navigation';

import { Entypo } from "@expo/vector-icons"
import { Image, View, TouchableOpacity,FlatList, Text } from "react-native"
import { THEME } from '../../theme';
import { Headind } from '../../components/Headind';
import { DuoCard, DuoCardProps} from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';
import { useEffect, useState } from 'react';




export function Game() {
    const [duos, setDuos] = useState<DuoCardProps[]>([])
    const [discordDuoSelected, setDiscordDuoSelected ] = useState('')


    const navigation = useNavigation()
    const route = useRoute()
    const game = route.params as GameParams

    function handleGoBack(){
        navigation.goBack();
    }

    async function getDiscordUser(adsId:string) {
        fetch(`http://192.168.190.121:3333/ads/${adsId}/discord`)
        .then(Response => Response.json()
        .then(data => setDiscordDuoSelected(data.discord)))
    }





    useEffect(()=>{
        fetch(`http://192.168.190.121:3333/games/${game.id}/ads`)
        .then(Response => Response.json()
        .then(data =>setDuos(data)))
      }, [])

  return (
    <Background>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity
                    onPress={handleGoBack}
                >
                    <Entypo name='chevron-thin-left'
                    color={THEME.COLORS.CAPTION_300}
                    size={20} />
                </TouchableOpacity>
                <Image 
                    source={logoImg}
                    style={styles.logo}
                />
                <View style={styles.right}/>

            </View>

            <Image
                source={{uri:game.bannerUrl}}
                style={styles.cover}
                resizeMode="cover"
            />
            <Headind
                title={game.title}
                subtitle='Conecte-se e comece a jogar'
            />
            <FlatList
                data={duos}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <DuoCard 
                    data={item} 
                    onConnect={()=> getDiscordUser(item.id)}
                    />
                )}
                horizontal
                style={styles.containerList}
                contentContainerStyle={[duos.length > 0 ? styles.contentList : { flex: 1, alignItems:'center', justifyContent: 'center' }]}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyListText} >
                        Não há anuncios publicados ainda
                    </Text>
                )}
            />
            
            <DuoMatch 
                onClose={()=> setDiscordDuoSelected('')}
                visible={discordDuoSelected.length > 0 }
                discord={discordDuoSelected}
             />

        </SafeAreaView>
    </Background>
  );
}