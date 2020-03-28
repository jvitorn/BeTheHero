import React,{ useState } from 'react';
import './styles.css';
import {Link,useHistory}  from 'react-router-dom';
import { FiCornerUpLeft } from 'react-icons/fi';
// imgs
import logoImg   from '../../assets/logo.svg';
//api
import api from "../../services/api";

export default function Register(){
    //value - funcção para capturar o valor 
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');
    //faz uma navegação por js
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        //informações para serrem enviadas
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        //caso sucesso
        try{
            //enviando dados para o backend
            const response = await api.post('ongs',data);

            alert(`Seu id de Acesso: ${response.data.id}`);
            //navegando o usuario para esta rota
            history.push('/');
        }catch(error){
            alert('Erro no cadastro, tente novamente.');
        }
        
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero "/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="back-link"><FiCornerUpLeft size={16} color="#E02041" /> Não Tenho Cadastro</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                        <input placeholder="UF" style={ { width:80 } } value={uf} onChange={e => setUf(e.target.value)} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}