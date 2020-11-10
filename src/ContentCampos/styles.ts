import styled from 'styled-components';

export const Campos = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`

export const Legenda = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Nome = styled.p`
    font-size: 14px;
    font-family: 'Public Sans', sans-serif;
    color: #9c9c9c;
`

export const Porcentagem = styled.p`
    font-size: 14px;
    font-family: 'Public Sans', sans-serif;
    color: #9c9c9c;
`

interface IBarraProps{
    cor1: string;
}

export const Barra = styled.div<IBarraProps>`
    width: 100%;
    height: 8px;
    border-radius: 10px;
    background-color: ${props => props.cor1};
`

interface IValorProps{
    cor2: string;
    valor: string;
}

export const Valor = styled.div<IValorProps>`
    height: 8px;
    border-radius: 10px;   
    background-color: ${props => props.cor2};
    width: ${props => props.valor};
`

export const LinkVersao = styled.a`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;

    text-decoration: none;
    color: #fff;
    background-color: #292929;
    
    height: 15px;
    border-radius: 10px;

    padding: 8px 18px;
    margin: 0 6px;
`;