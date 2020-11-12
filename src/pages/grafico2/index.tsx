import React, { PureComponent } from 'react';

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


import data from '../../repositories/grafico2';


import ContentHeader from '../../ContentHeader';
import ContentInfo from '../../ContentInfo';
import ContentCampos from '../../ContentCampos';

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


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/2vyv694u/';

  render() {
    return (
      <Container>
        <ContentHeader title="Gráfico de radar com análise da nota e a média da turma em cada atividade" link1="" link2="/Grafico2Vs2" link3="/Grafico2Vs3"/>

        <Grid>
          <DivContentInfo>
            <ContentInfo/>
          </DivContentInfo>

          <Grafico>
            <Header>
              <Sobre>
                <Title> Nota Aluno e Nota Turma </Title>
                <Descricao> Aqui vai uma breve descrição do gráfico para melhor compreensão da sua funcionalidade no qual eu não sei oq escrever ainda rs. </Descricao>
              </Sobre>
            </Header>
            
            <AreaChart width={658} height={250} data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="0">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="0">
                  <stop offset="5%" stopColor="#45aaf2" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#45aaf2" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis tickSize={6} ticks={[0, 0.5, 1, 1.5, 2, 2.5]} domain={[0,2.5]}/>
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />          
              <Legend />
              <Area type="monotone" dataKey="turma" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
              <Area type="monotone" dataKey="estudante" stroke="#45aaf2" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>    
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