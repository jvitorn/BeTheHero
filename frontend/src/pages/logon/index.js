import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
// imgs
import heroesImg from '../../assets/heroes.png';
import logoImg   from '../../assets/logo.svg';

export default function Logon(){
    return (
            <div className="logon-container">
                <section className="form">
                    <img src={logoImg} alt="Be The Hero - Logo"/>
                    <form>
                        <h1>Faça Seu Logon</h1>

                        <input placeholder="Sua ID"/>
                        <button className="button" type="submit">Entrar</button>
                        <Link to="/register" className="back-link"><FiLogIn size={16} color="#E02041" /> Não Tenho Cadastro</Link>
                    </form>
                </section>
                <img src={heroesImg} alt="Heroes"/>
            </div>
    );
};
