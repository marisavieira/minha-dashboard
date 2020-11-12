import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;   
    width: 100%; 
    padding: 0 60px;
`;


interface ICardProps{
    cor: string;
}

export const Card = styled.section<ICardProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 200px;
    height: 65px;

    background-color: #fff;

    border-radius: 10px;
    border-left: 5px solid ${props => props.cor};

    >FaUserGraduate{
        margin: 0 25px;
    }
`

export const BarraDiv = styled.div`
    height: 50%;
    background-color: #f0f0f2;
    width: 2px;
    margin: 0 25px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30px;
    font-family: 'Roboto', sans-serif;
    color: #555555;

`

export const Titulo = styled.p`
    margin:0;
    font-size: 12px;
`

export const Valor = styled.p`
    margin:0;
    font-size: 16px;
    font-weight: 600;
`
