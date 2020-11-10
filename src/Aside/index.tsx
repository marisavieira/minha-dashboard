import React from 'react';


import {
    FaRegChartBar,
    FaUser,
    FaUsers
} from "react-icons/fa";

import{
    Container,
    Header,
    MenuContainer, 
    Categoria,
    MenuItemLink,
    Name,
    Linha
} from  './styles';

const Aside: React.FC = () =>{
     return (
         <Container>
             <Header>
                 <FaRegChartBar size="35px" color="#fff"/>
             </Header>

             <MenuContainer>
                <Categoria>
                    <FaUser size="15px" color="#fff"/>
                    <p> Gráfico Individual </p>
                </Categoria>
                <MenuItemLink href="/Grafico1Vs1">
                    <Linha/>
                    <Name> Grafico1 </Name>
                </MenuItemLink>
                
                <MenuItemLink href="Grafico2Vs1">
                    <Linha/>
                    <Name> Grafico2 </Name>                    
                </MenuItemLink>

                
                <Categoria>
                    <FaUsers size="18px" color="#fff"/>
                    <p> Gráfico Turma </p>
                </Categoria>
                <MenuItemLink href="Grafico3Vs1">
                    <Linha/>
                    <Name> Grafico3 </Name>                    
                </MenuItemLink>
                
                <MenuItemLink href="Grafico4Vs1">
                    <Linha/>
                    <Name> Grafico4 </Name>                    
                </MenuItemLink>
             </MenuContainer>
         </Container>
     );
}

export default Aside;