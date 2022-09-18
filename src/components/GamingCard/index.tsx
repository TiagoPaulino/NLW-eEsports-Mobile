import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';
import { styles } from './styles';

export interface GamingCardProps{
    id: string,
    title: string,
    _count:{
        ads: number
    }
    bannerUrl: string
}

interface Props extends TouchableOpacityProps {
    data: GamingCardProps
}

export function GamingCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground
        style={styles.cover}
        source={{uri: data.bannerUrl}}

        >
        <LinearGradient 
            colors={THEME.COLORS.FOOTER}
            style={styles.footer}>
                <Text style={styles.nome}>
                    {data.title}
                </Text>
                <Text style={styles.ads}>
                    {data._count.ads} Anuncios
                </Text>
        </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  );
}