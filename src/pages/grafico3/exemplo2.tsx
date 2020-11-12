import React, { PureComponent } from 'react';

import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

import datag3 from '../../repositories/grafico3';


import ContentHeader from '../../ContentHeader';
import ContentInfo from '../../ContentInfo';
import ContentGrafico from '../../ContentGrafico';

import{
  Grid,
  Container,
  Grafico,
  Header,
  Sobre,
  Title,
  Descricao,
  DivContentInfo,
  ContentStatistic
} from  './styles';

const datag = [
  {
      name: "Sem risco",
      value: 25,
      percent: 62.5, 
      color: '#5092f2'
  },
  {
      name: "Em risco",
      value: 15,
      percent: 37.5, 
      color: '#e74c3c'
  },
];


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

  render() {
    return (
      <Container>
        <ContentHeader title="Gráfico de barras com análise da nota de cada aluno e a média da turma" link1="/Grafico3Vs1" link2="" link3="/Grafico3Vs3"/>

        <Grid>
          <DivContentInfo>
            <ContentInfo/>
          </DivContentInfo>

          <Grafico>
            <Header>
              <Sobre>
                <Title> Nota Aluno e Média Turma </Title>
                <Descricao> Aqui vai uma breve descrição do gráfico para melhor compreensão da sua funcionalidade no qual eu não sei oq escrever ainda rs. </Descricao>
              </Sobre>
            </Header>
            
            <ComposedChart
          layout="vertical"          
          data={datag3}
          width={600}
          height={2500}
        >
          <CartesianGrid stroke="#f5f5f5" horizontal={true} vertical={false}/>
          <XAxis type="number" tickSize={5} ticks={[0.5, 1, 1.5, 2, 2.5]}/>
          <YAxis dataKey="name" type="category" width={96} />
          <Tooltip />
          <Legend />
          <Bar dataKey="estudante" barSize={40} fill="#1e90ff" />
          <Line dataKey="turma" strokeWidth={4} stroke="#FFC312" />
        </ComposedChart>
          </Grafico>

        <ContentStatistic>
            <Title> Estatística - Turma </Title>
            <ContentGrafico data={datag}/>
        </ContentStatistic>
        </Grid>        
      </Container>
    );
  }
}