//- Gráfico de barras com análise da nota do aluno Vs faltas do aluno (tipo um histograma) (Gráfico Individual)
//- Gráfico de radar com a análise da nota que o aluno obteve em cada uma das provas Vs a média da nota da turma em cada prova (Gráfico Individual)
//- Gráfico de dispersão com o comportamento faltas Vs notas de uma turma inteira com categorização entre as 4 provas distintas (Gráfico de turma)
//- Gráfico de barras com todas as notas que os alunos alcançaram em determinada prova Vs a média da turma naquela prova (Gráfico de turma)

import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


import ContentHeader from '../../../ContentHeader';

import{
  Grid,
  Container,
  Grafico,
  Header,
  Title,
  BotaoGrafico,
  ContentStatistic
} from  './styles';

import datag1 from '../../../repositories/grafico1';
import datag12 from '../../../repositories/grafico12';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/31s5e83y/';

  render() {
    return (
      <Container>
        <ContentHeader title="Gráfico de barras com análise da Nota do aluno vs Faltas do aluno" link1="/Grafico1Vs1" link2="" link3="/Grafico1Vs3"/>

        <Grid>
          <Grafico>
            <Header>
              <Title> Nota Aluno vs Falta durante Avaliação </Title>
            </Header>
            
            <BarChart
              width={650}
              height={300}
              data={datag1}
            >
              <CartesianGrid stroke="#f5f5f5" horizontal={true} vertical={false}/>
              <XAxis dataKey="avaliacao" />
              <YAxis yAxisId="left" orientation="left" stroke="#0c2461" tickSize={6} ticks={[0, 0.5, 1, 1.5, 2, 2.5]} domain={[0, 2.5]}/>
              <YAxis yAxisId="right" orientation="right" stroke="#74b9ff" tickSize={6} ticks={[0, 4, 8, 12, 16, 20]} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" barSize={40} dataKey="nota" fill="#0c2461" />
              <Bar yAxisId="right" barSize={40} dataKey="faltas" fill="#74b9ff" />
            </BarChart>              

            
            <BarChart
                width={650}
                height={300}
                data={datag12}
                margin={{
                top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" horizontal={true} vertical={false}/>
                <XAxis dataKey="avaliacao" />
                <YAxis yAxisId="left" orientation="left" stroke="#2f2851" tickSize={5} ticks={[0, 2.5, 5, 7.5, 10]} domain={[0, 10]}/>
                <YAxis yAxisId="right" orientation="right" stroke="#bfb9da" tickSize={5} ticks={[0, 20, 40, 60, 80]}/>
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="nota" barSize={40} fill="#2f2851" />
                <Bar yAxisId="right" dataKey="faltas" barSize={40} fill="#bfb9da" />
            </BarChart>        
          </Grafico>


        </Grid>        
      </Container>
    );
  }
}