import React from 'react';

import{
    Container,
    Card, 
    Barra,
    Imagem,
    BarraDiv,
    Info,
    Titulo,
    Valor
} from './styles';

interface IContentInfoProps {
  /*  title: string;
    link1: string;
    link2: string;
    link3: string;*/
}

const Content: React.FC<IContentInfoProps> = ({
}) =>{
     return (
         <Container>
            <Card>
                <Barra/>
                <Imagem/>
                <BarraDiv/>
                <Info>
                    <Titulo></Titulo>
                    <Valor></Valor>
                </Info>
            </Card>
         </Container>
     );
}

export default Content;