import React,{ useEffect,useState } from  'react';
//icons
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { View,FlatList,Image,Text,Button } from 'react-native';    

import logoImg from '../../assets/logo.png';
import styles from './styles';

import api from '../../services/api';

export default function Incidents(){
    const [incidents,setIncidents] = useState([]);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(false);
    const [total,setTotal] = useState(0);
    const navigation = useNavigation();
    //navegação pada 'detail'
    function navigateToDetail(incident){
        //nome da rota e enviando os casos para essa rota 
        navigation.navigate('Detail',{incident});
    }
    async function loadIncidents(){
        if(loading){
            return;
        }
        if(total > 0 && incidents.length == total){
            return;
        }
        setLoading(true);

        const response = await api.get('incidents',{
            params: { page }
        }) ;
        //anexando novos dados com o antigo 
        setIncidents([... incidents, ...response.data]);
        //capturando header que esta no servidor 
        setTotal(response.headers['x-total-count']);
        //carregando mais dados 
        setLoading(false);
        //paginação 
        setPage(page + 1);
    }
    useEffect(()=>{
        loadIncidents()
    },[]);
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} Casos. </Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo ! </Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e Salve o dia.</Text>

            <FlatList style={styles.incidentsList} data={incidents} showsVerticalScrollIndicator={false} onEndReached={loadIncidents} onEndReachedThreshold={0.2} keyExtractor={incident => String(incident.id)} renderItem={({ item: incident })=>(
                <View style={styles.incident}>

                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>
                
                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>
                
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}</Text>

                <Button style={styles.detailsButton} onPress={()=>navigateToDetail(incident)} title="Ver Mais Detalhes"  color="#E02041"/>
            </View>
            ) } />
        </View>
    );
}