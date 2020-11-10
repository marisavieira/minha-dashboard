import React, { PureComponent } from 'react';

import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


import ContentHeader from '../../ContentHeader';
import{
  Container,
  Grafico,
  Header,
  Title,
  Botoes,
  BtnLink
} from  './styles';

import datag401 from '../../repositories/grafico401';
import datag402 from '../../repositories/grafico402';
import datag403 from '../../repositories/grafico403';
import datag404 from '../../repositories/grafico404';


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3mw50Lc9/';
  

  render() {
    
        const borda = 2;
        return (
          <Container>
            <ContentHeader title="Gráfico de dispersão faltas vs notas turma com categorização entre as 4 atividades distintas" link1="Grafico4Vs1" link2="" link3="/Grafico4Vs3"/>
    
          <Grafico>
            <Header>
              <Title> Nota Turma vs Quantidade Falta </Title>
            </Header>
              <ScatterChart
                width={600}
                height={500}
                margin={{
                  top: 20, right: 20, bottom: 20, left: 20,
                }}
              >
                <XAxis type="number" dataKey="x" name="faltas" unit=" faltas" reversed={true} tickSize={5} ticks={[20, 15, 10, 5, 0]} tick={{ fontFamily: 'sans-serif' }}/>
                <YAxis type="number" dataKey="y" name="nota" unit=" pnts" tickSize={6} ticks={[0, 0.5, 1, 1.5, 2, 2.5]}/>
                <Tooltip cursor={{ strokeDasharray: '2 2' }} />
                <Legend />
                <Scatter data={datag401} fill="transparent" stroke="#fdcb6e" strokeWidth={borda} shape="circle" />
                <Scatter data={datag402} fill="transparent" stroke="#0984e3" strokeWidth={borda} shape="circle" />
                <Scatter data={datag403} fill="transparent" stroke="#fd79a8" strokeWidth={borda} shape="circle" />
                <Scatter data={datag404} fill="transparent" stroke="#00b894" strokeWidth={borda} shape="circle" />
                <Scatter name="Atividade 1" fill="#fdcb6e"/>
                <Scatter name="Atividade 2" fill="#0984e3"/>
                <Scatter name="Atividade 3" fill="#fd79a8"/>
                <Scatter name="Atividade 4" fill="#00b894"/>
              </ScatterChart>
                <Botoes>
                  <BtnLink href="../Grafico4Vs1"> Tudo </BtnLink>
                  <BtnLink href="../grafico0402"> Prova 1 </BtnLink>
                  <BtnLink href="../grafico0403"> Prova 2 </BtnLink>
                  <BtnLink href="../grafico0404"> Trabalho 1 </BtnLink>
                  <BtnLink href="../grafico0405"> Trabalho 2 </BtnLink>
                </Botoes>
              </Grafico>      
        </Container>
        );
  }
}