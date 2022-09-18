import { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { MaterialIcons } from "@expo/vector-icons"
import { Activity, CheckCircle } from "phosphor-react-native"

import { styles } from './styles';
import { THEME } from '../../theme';
import { Headind } from '../Headind';

interface Props extends ModalProps{
    discord: string;
    onClose:()=> void
}




export function DuoMatch({discord,onClose,  ...rest}: Props) {

    const [isCopping, setIsCopping] = useState(false)


    async function handleCopyDiscordtoClipboard() {
        setIsCopping(true)
        await Clipboard.setStringAsync(discord)
        Alert.alert('Discord Copiado!', "Usuario copiado, basta colar em adicionar amigo em seu discord")
        setIsCopping(false)
    }
  return (
    <Modal 
        animationType='fade'
        transparent
        statusBarTranslucent
        {...rest}

    >
        <View style={styles.container} >
            <View style={styles.content}>
                <TouchableOpacity  
                    style={styles.closeIcon}
                    onPress={onClose}
                    >
                    <MaterialIcons 
                        name='close'
                        size={20}
                        color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>
                <CheckCircle 
                    size={64}
                    color={THEME.COLORS.SUCCESS}
                    weight="bold"
                />
                <Headind 
                    style={{alignItems: 'center', marginTop:24}}
                    title="Let's Play" subtitle='Agora é só começar a jogar!'/>
                <Text style={styles.label} >
                    Adicone em seu Discord
                </Text>
                <TouchableOpacity
                    onPress={handleCopyDiscordtoClipboard}
                    style={styles.discordButton}
                    disabled={isCopping}

                >
                    <Text style={styles.discord}>
                        {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> :  discord}
                    </Text>
                </TouchableOpacity>

                
            </View>
        </View>
    </Modal>
  );
}