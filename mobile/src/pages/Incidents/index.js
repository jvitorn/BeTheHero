import React from  'react';
//icons
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { View,FlatList,Image,Text,Button } from 'react-native';    

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents(){
    const navigation = useNavigation();
    //navegação pada 'detail'
    function navigateToDetail(){
        //nome da rota 
        navigation.navigate('Detail');
    }
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> 0 Casos. </Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo ! </Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e Salve o dia.</Text>

            <FlatList style={styles.incidentsList} data={[1,2,3]} showsVerticalScrollIndicator={false} keyExtractor={incident => String(incident)} renderItem={()=>(
                <View style={styles.incident}>

                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>
                
                <Text style={styles.incidentProperty2}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>
                
                <Text style={styles.incidentProperty3}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 122,00</Text>

                <Button style={styles.detailsButton} onPress={navigateToDetail} title="Ver Mais Detalhes"  color="#E02041"/>
            </View>
            ) } />
        </View>
    );
}