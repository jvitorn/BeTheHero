import React from  'react';
import { View,Image,Button,Text } from 'react-native';  
import { Feather } from '@expo/vector-icons';  
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail(){
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Button style={styles.detailsButton} onPress={navigateBack} title="Voltar"  color="#E02041"/>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>
                
                <Text style={styles.incidentProperty2}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>
                
                <Text style={styles.incidentProperty3}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 122,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia !</Text>
                <Text style={styles.heroTitle}>Seja o Heroi desse caso.</Text>

                <Text style={styles.heroDescription}>Entre Em Contato</Text>

                <View style={styles.action}>
                    <Button style={styles.action} onPress={()=>{}} title="Whatsapp"  color="#E02041"/>
                </View>
                <View style={styles.action}>
                    <Button style={styles.action} onPress={()=>{}} title="Email"  color="#E02041"/>
                </View>
            </View>
        </View>
    );
}