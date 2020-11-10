import React, { PureComponent } from 'react';
import "./estilo.css";

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
  TitleEstatistica,
  BotaoGrafico,
  DivContentInfo,
  ContentStatistic
} from  './styles';

import datag1 from '../../../repositories/grafico1';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/31s5e83y/';

  render() {
    return (
      <Container>
        <ContentHeader title="Gráfico de barras com análise na nota do aluno e as faltas do aluno" link1="" link2="/Grafico1Vs2" link3="/Grafico1Vs3"/>

        <Grid>
          <Grafico>
            <Header>
              <Sobre>
                <Title> Nota Aluno e Falta durante Avaliação </Title>
                <Descricao> Aqui vai uma breve descrição do gráfico para melhor compreensão da sua funcionalidade no qual eu não sei oq escrever ainda rs. </Descricao>
              </Sobre>
              <BotaoGrafico href="/Grafico1Vs1Cresc"> Crescente <span>&gt;</span> </BotaoGrafico>
            </Header>

            <DivContentInfo>
              <ContentInfo/>
            </DivContentInfo>
            
            <BarChart
              width={650}
              height={300}
              font-family={'sans-serif'}
              data={datag1}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
            >
            <CartesianGrid stroke="#f5f5f5" horizontal={true} vertical={false}/>
              <XAxis dataKey="avaliacao" />
              <YAxis 
              yAxisId="left" tickLine={false} orientation="left" stroke="#0c2461" tickSize={6} ticks={[0, 0.5, 1, 1.5, 2, 2.5]} domain={[0,2.5]}/>
              <YAxis yAxisId="right" orientation="right" stroke="#74b9ff" tickSize={6} ticks={[0, 4, 8, 12, 16, 20]} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" barSize={40} dataKey="nota" fill="#0c2461" />
              <Bar yAxisId="right" barSize={40} dataKey="faltas" fill="#74b9ff" />
            </BarChart>     
          </Grafico>

          <ContentStatistic>
              <Title> Estatística - Estudante </Title>
              <ContentCampos nome="Situação" porcentagem="51%" cor1="#edf4fe" cor2="#5092f2"/>
              <ContentCampos nome="Frequência" porcentagem="26.4%" cor1="#e8faee" cor2="#1ac167"/>

              <TitleEstatistica> Estatística - Turma </TitleEstatistica>
              <ContentCampos nome="Situação" porcentagem="51%" cor1="#edf4fe" cor2="#5092f2"/>
              <ContentCampos nome="Frequência" porcentagem="26.4%" cor1="#e8faee" cor2="#1ac167"/>
          </ContentStatistic>
        </Grid>        
      </Container>
    );
  }
}