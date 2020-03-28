import React,{ useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
//api
import api from "../../services/api";

// imgs
import heroesImg from '../../assets/heroes.png';
import logoImg   from '../../assets/logo.svg';

export default function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        //caso de erro
        try{
            const response = await api.post('sessions',{ id });
            //salvando em uma sessao de local storage
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            //enviando ele para outra pagina
            history.push('/profile');
        }catch(error){
            alert('Falha no Login , tente novamente');
        }
    }
    return (
            <div className="logon-container">
                <section className="form">
                    <img src={logoImg} alt="Be The Hero - Logo"/>
                    <form onSubmit={handleLogin}>
                        <h1>Faça Seu Logon</h1>

                        <input placeholder="Sua ID" value={id} onChange={ e=> setId(e.target.value)}/>
                        <button className="button" type="submit">Entrar</button>
                        <Link to="/register" className="back-link"><FiLogIn size={16} color="#E02041" /> Não Tenho Cadastro</Link>
                    </form>
                </section>
                <img src={heroesImg} alt="Heroes"/>
            </div>
    );
};
