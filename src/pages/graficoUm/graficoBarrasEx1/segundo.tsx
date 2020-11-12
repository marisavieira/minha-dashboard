import React, { PureComponent } from 'react';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


import ContentHeader from '../../../ContentHeader';
import ContentInfo from '../../../ContentInfo';
import ContentCampos from '../../../ContentCampos';

import{
  Grid,
  Container,
  Grafico,
  Header,
  Sobre,
  Title,
  Descricao,
  BotaoGrafico,
  DivContentInfo,
  ContentStatistic
} from  './styles';

import datag12 from '../../../repositories/grafico12';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/31s5e83y/';

  render() {
    return (
      <Container>
        <ContentHeader title="Gráfico de barras com análise na nota do aluno e as faltas do aluno" link1="" link2="/Grafico1Vs2" link3="/Grafico1Vs3"/>

        <Grid>
          <DivContentInfo>
            <ContentInfo/>
          </DivContentInfo>

          <Grafico>
            <Header>
              <Sobre>
                <Title> Nota Aluno e Falta durante Avaliação </Title>
                <Descricao> Aqui vai uma breve descrição do gráfico para melhor compreensão da sua funcionalidade no qual eu não sei oq escrever ainda rs. </Descricao>
              </Sobre>
              <BotaoGrafico href="/Grafico1Vs1"> Individual <span>&gt;</span> </BotaoGrafico>
            </Header>

            <BarChart
                width={650}
                height={280}
                data={datag12}
                margin={{
                top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" horizontal={true} vertical={false}/>
                <XAxis dataKey="avaliacao" />
                <YAxis yAxisId="left" orientation="left" stroke="#2f2851" tickSize={5} ticks={[0, 2.5, 5, 7.5, 10]} domain={[0,10]}/>
                <YAxis yAxisId="right" orientation="right" stroke="#bfb9da" tickSize={5} ticks={[0, 20, 40, 60, 80]}/>
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="nota" barSize={40} fill="#2f2851" />
                <Bar yAxisId="right" dataKey="faltas" barSize={40} fill="#bfb9da" />
            </BarChart>        
          </Grafico>

          <ContentStatistic>
              <Title> Estatística - Estudante </Title>
              <ContentCampos nome="Situação" porcentagem="46%" cor1="#edf4fe" cor2="#5092f2"/>
              <ContentCampos nome="Frequência" porcentagem="51.2%" cor1="#e8faee" cor2="#1ac167"/>
          </ContentStatistic>
        </Grid>        
      </Container>
    );
  }
}