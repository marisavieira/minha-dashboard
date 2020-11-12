import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #f6f5fb;
`;


export const Grid = styled.div`    
    display: grid;
    grid-template-columns: 720px auto;
    grid-template-rows: 80px auto;

    grid-template-areas:
    'CI CI'
    'GF CS'; 
`
   

export const Grafico = styled.div`
    grid-area: GF;
    display: flex;    
    font-family: 'Public Sans', sans-serif;
    flex-direction: column;
    align-items: center;

    width:650px;

    background-color: #ffffff;
    border-radius: 25px;
    
    padding: 15px;
    margin: 5px 0 10px 20px;

    height: 375px;

    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #292929;
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
    margin-bottom: 35px;
    padding-top: 10px;
`;

export const Sobre = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p`
    color: #70777f;
    font-weight: 600;
    font-family: 'Public Sans', sans-serif;
    font-size: 16px;
    margin: 0 0 4px 5px;
`;

export const Descricao = styled.p`
    color: #B9B9B9;
    font-weight: 600;
    font-family: 'Public Sans', sans-serif;
    font-size: 12px;
    margin: 0 0 0 5px;
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

export const DivContentInfo = styled.div`
    grid-area: CI;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;  
    width: 100%;
    margin-bottom: 15px;
`

export const ContentStatistic = styled.div`
    grid-area: CS;
    background-color: #ffffff;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    padding: 15px 30px;
    height: 260px;
    margin: 5px 20px 5px 0;

`

export const Botoes = styled.div`
    display: flex;
    justify-content: space-between; 
`

export const BtnLink = styled.a`
    color: #000;
    text-decoration: none;
    margin: 10px;
    font-family: 'Public Sans', sans-serif;
    background-color: #f1f2f6;
    padding: 5px;
    border-radius: 10px;
    width: 60px;
    text-align: center;
    font-size: 12px;
`