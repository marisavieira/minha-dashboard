import React from 'react';

import{
    Campos,
    Legenda, 
    Nome,
    Porcentagem,
    Barra,
    Valor
} from './styles';

interface IContentHeaderProps {
    nome: string;
    porcentagem: string;
    cor1: string;
    cor2: string;
}

const Content: React.FC<IContentHeaderProps> = ({
    nome, porcentagem, cor1, cor2
}) =>{
    return (
        <Campos>
            <Legenda>
                <Nome> {nome} </Nome>
                <Porcentagem> {porcentagem} </Porcentagem>
            </Legenda>
            <Barra cor1={cor1}>
                <Valor cor2={cor2} valor={porcentagem}/>
            </Barra>
        </Campos>
     );
}

export default Content;