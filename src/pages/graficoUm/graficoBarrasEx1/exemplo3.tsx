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
  DivContentInfo,
  ContentStatistic
} from  './styles';

import datag1 from '../../../repositories/grafico1';
import datag12 from '../../../repositories/grafico12';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/31s5e83y/';

  render() {
    return (
      <Container>
        <ContentHeader title="Gráfico de colunas com análise na nota do aluno e as faltas do aluno" link1="/Grafico1Vs1" link2="/Grafico1Vs2" link3=""/>

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
            </Header>
            
            <BarChart
              width={650}
              height={280}
              data={datag1}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" horizontal={false} vertical={false}/>
              <XAxis dataKey="avaliacao" />
              <YAxis yAxisId="left" orientation="left" stroke="#0c2461" tickSize={7} ticks={[0, 0.5, 1, 1.5, 2, 2.5]} domain={[0, 2.5]}/>
              <YAxis yAxisId="right" orientation="right" stroke="#74b9ff" tickSize={7} ticks={[0, 4, 8, 12, 16, 20]}/>
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" barSize={40} dataKey="nota" fill="#0c2461" />
              <Bar yAxisId="right" barSize={40} dataKey="faltas" fill="#74b9ff" />
            </BarChart>              

            
            <BarChart
                width={650}
                height={280}
                data={datag12}
                margin={{
                top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" horizontal={false} vertical={false}/>
                <XAxis dataKey="avaliacao" />
                <YAxis yAxisId="left" orientation="left" stroke="#0c2461" tickSize={5} ticks={[0, 2.5, 5, 7.5, 10]} domain={[0, 10]}/>
                <YAxis yAxisId="right" orientation="right" stroke="#74b9ff" tickSize={5} ticks={[0, 20, 40, 60, 80]}/>
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="nota" barSize={40} fill="#0c2461" />
                <Bar yAxisId="right" dataKey="faltas" barSize={40} fill="#74b9ff" />
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