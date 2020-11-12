import React from 'react';

import {
    FaUserGraduate,
    FaRegEdit,
    FaChartArea,
    FaChartLine
} from "react-icons/fa";

import{
    Container,
    Card, 
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
            <Card cor={"#594d8f"} >
                <FaUserGraduate size="35px" className="mr-29" color="#594d8f" />
                <BarraDiv/>
                <Info>
                    <Titulo> Alunos </Titulo>
                    <Valor> 40 </Valor>
                </Info>
            </Card>

            
            <Card cor={"#f89693"} >
                <FaRegEdit size="35px" className="mr-29" color="#f89693" />
                <BarraDiv/>
                <Info>
                    <Titulo> Atividades </Titulo>
                    <Valor> 4 </Valor>
                </Info>
            </Card>

            
            <Card cor={"#47aa67"} >
                <FaChartArea size="35px" className="mr-29" color="#47aa67" />
                <BarraDiv/>
                <Info>
                    <Titulo> Média </Titulo>
                    <Valor> 5.3 </Valor>
                </Info>
            </Card>

            
            <Card cor={"#ffbf01"} >
                <FaChartLine size="35px" className="mr-29" color="#ffbf01" />
                <BarraDiv/>
                <Info>
                    <Titulo> Frequência </Titulo>
                    <Valor> 60% </Valor>
                </Info>
            </Card>
         </Container>
     );
}

export default Content;