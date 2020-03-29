import React from  'react';
import { View,Image,Button,Text,Linking } from 'react-native';  
import { Feather } from '@expo/vector-icons';  
import { useNavigation,useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    //capturando incidents
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato, pois gostaria de ajudar no Caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: `Heroi do caso : ${incident.title}`,
            recipients:[incident.email],
            body:message,
        });
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=+55${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Button style={styles.detailsButton} onPress={navigateBack} title="Voltar"  color="#E02041"/>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
                
                <Text style={styles.incidentProperty2}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>
                
                <Text style={styles.incidentProperty3}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia !</Text>
                <Text style={styles.heroTitle}>Seja o Heroi desse caso.</Text>

                <Text style={styles.heroDescription}>Entre Em Contato</Text>

                <View style={styles.action}>
                    <Button style={styles.action} onPress={sendWhatsapp} title="Whatsapp"  color="#E02041"/>
                </View>
                <View style={styles.action}>
                    <Button style={styles.action} onPress={sendEmail} title="Email"  color="#E02041"/>
                </View>
            </View>
        </View>
    );
}