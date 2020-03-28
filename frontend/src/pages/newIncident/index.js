import React from  'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiCornerUpLeft } from 'react-icons/fi';
// imgs
import logoImg   from '../../assets/logo.svg';

export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero "/>

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva detalhadamente para encontrar um heroi para resolver isso.</p>

                    <Link to="/profile" className="back-link"><FiCornerUpLeft size={16} color="#E02041" /> Voltar para home</Link>
                </section>
                <form>
                    <input placeholder="Titulo do caso"/>
                    <textarea placeholder="Descrição do caso"/>
                    <input placeholder="Valor em Reais"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
         </div>
    );
}