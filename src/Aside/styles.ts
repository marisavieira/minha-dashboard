import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    background-color: #292929;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 15px;

    font-family: 'Roboto', sans-serif;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;    
`;

export const MenuContainer  = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
`;

export const Categoria  = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;

    >p{
        color: #fff;
        margin-left: 5px;
    }
`;

export const MenuItemLink = styled.a`
    display: flex;
    text-decoration: none;   
    align-items: center;
    margin: 6px 0 6px 22px;
    padding-left: 20px;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;  

    &:hover{
        background-color: rgba(255, 255, 255, 0.3);
    }

`;
export const Name = styled.p`
    color: #fff; 
    font-size: 14px;
    margin-left: 5px;
`;

export const Linha  = styled.div`
    border-left: 4px solid #75a02a;
    height: 20px;
    margin-right: 4px;
`;