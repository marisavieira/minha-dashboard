import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CH;
    width: 95%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 25px;     
`;

export const TituloGrafico = styled.div`
    font-family: 'Public Sans', sans-serif;
    color: #2d3436;
    text-align: center;

    >p{
        font-size: 16px;
        color: #535965;
        font-weight: 600;
    }
`;

export const Menu = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15px;
`;

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