import styled, { keyframes } from 'styled-components';

interface ILegendProps {
    color: string;
}


export const Container = styled.div`
    font-family: 'Public Sans', sans-serif;
    width: 100%;
    height: 200px;
    margin: 10px 0;
    color: #000;
    border-radius: 7px;
    display: flex;
`;

export const SideLeft = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-left: 30px;
`;

export const LegendContainer = styled.ul`
    list-style: none;
    
    height: 175px; 
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;  
    > div {
        background-color: ${props => props.color};
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        
        font-size: 14px;        
        line-height: 40px;
        text-align: center; 
        padding: 5px; 
    }
    > span {
        margin-left: 8px;
        width: 90px;
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`;