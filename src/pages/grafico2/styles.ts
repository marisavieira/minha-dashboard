import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #f6f5fb;
    display: flex;
    flex-direction: column;
    align-items:center;
`;
   

export const Grafico = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width:730px;

    background-color: #ffffff;
    border-radius: 25px;
    
    padding: 15px;

    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #5dadf4;
        border-radius: 10px;
        margin: 35px;
    }
    ::-webkit-scrollbar-track{
        background-color: #ffffff;
        border-radius: 10px;
        margin: 35px;
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.p`
    color: #70777f;
    font-weight: 600;
    font-family: 'Public Sans', sans-serif;
    font-size: 16px;
    margin-left: 5px;
`;

export const BotaoGrafico = styled.a`

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    color: #70777f;
    
    background-color: #f1f2f6;
    border-radius: 10px;
    padding: 6px 15px;
    

    &:hover{
        background-color: #f1f2f6;
    }
    span{
        font-size: 19px;
        margin-left: 4px;
        color: #adb2b6;
    }
`;

export const ContentStatistic = styled.div`
    grid-area: CS;
    background-color: #ffffff;
    border-radius: 25px;
    
    padding: 15px 30px;

`

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
    cor: string;
}

export const Barra = styled.div<IBarraProps>`
    width: 100%;
    height: 8px;
    border-radius: 10px;
    background-color: ${props => props.cor};
`

interface IValorProps{
    cor: string;
    valor: string;
}

export const Valor = styled.div<IValorProps>`
    height: 8px;
    border-radius: 10px;   
    background-color: ${props => props.cor};
    width: ${props => props.valor};
`

