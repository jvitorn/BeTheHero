import React,{ useEffect,useState } from 'react';
import LogoImg from '../../assets/logo.svg';
import { Link,useHistory } from 'react-router-dom';
import { FiPower,FiTrash2 } from 'react-icons/fi';
import './styles.css';
//api
import api from '../../services/api';

export default function Profile(){
    const history = useHistory();
    const [incidents,setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    //verificar no banco de dados todos os casos da ong logada
    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization:ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        });
    },[ongId]);
    //deletando um incident
    async function handleDeleteIncident(id){
        try{
          await api.delete(`incidents/${id}`,{
              headers:{
                  Authorization:ongId,
              }
          }); 
          //depois que for excluido um caso , isso ira remover o caso sem recarregar a pagina
          setIncidents(incidents.filter(incidents => incidents.id !== id));     
        }catch(error){
            alert('Erro ao deletar caso, tente novamente.');
        }
    }
    function handleLogout(){
        localStorage.clear();
        
        history.push('/');
    }
    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="Be The Hero"/>
                <span>Bem Vinda , {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button onClick={handleLogout} type="button"><FiPower size={18} color="#E02041"/></button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id} >
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{ style:'currency',currency:'BRL'} ).format(incident.value)}</p>

                    <button onClick={()=> handleDeleteIncident(incident.id)} type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
                </li>
                ))}
            </ul>
        </div>
    );
}