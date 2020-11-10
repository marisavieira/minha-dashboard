import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

  
import ContentHeader from '../../ContentHeader';
import{
  Container,
  Grafico,
  Header,
  Title
} from  './styles';

import datag3 from '../../repositories/grafico3';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

  render() {
    return (
      <Container>
        <ContentHeader title="Gráfico de barras com análise da nota de cada aluno vs a média da turma" link1="Grafico3Vs1" link2="" link3="/Grafico3Vs3"/>

      <Grafico>
            <Header>
              <Title> Nota Aluno vs Média Turma </Title>
            </Header>
        <ComposedChart
          layout="vertical"          
          data={datag3}
          width={650}
          height={2500}
        >
          <CartesianGrid stroke="#f5f5f5" horizontal={true} vertical={false}/>
          <XAxis type="number" tickSize={5} ticks={[0.5, 1, 1.5, 2, 2.5]}/>
          <YAxis dataKey="name" type="category" width={50} />
          <Tooltip />
          <Legend />
          <Bar dataKey="estudante" barSize={40} fill="#1e90ff" />
          <Line dataKey="turma" strokeWidth={4} stroke="#FFC312" />
        </ComposedChart>
      </Grafico>     
</Container>
    );
  }
}