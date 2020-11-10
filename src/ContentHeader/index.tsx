import React from 'react';

import{
    Container,
    TituloGrafico, 
    Menu,
    LinkVersao
} from './styles';

interface IContentHeaderProps {
    title: string;
    link1: string;
    link2: string;
    link3: string;
}

const Content: React.FC<IContentHeaderProps> = ({
    title, link1, link2, link3
}) =>{
     return (
         <Container>
            <TituloGrafico>
            <p> {title} </p>
            </TituloGrafico>
            <Menu>
                <LinkVersao href={link1}> Exemplo 1 </LinkVersao>
                <LinkVersao href={link2}> Exemplo 2 </LinkVersao>
                <LinkVersao href={link3}> Exemplo 3 </LinkVersao>
            </Menu>
         </Container>
     );
}

export default Content;