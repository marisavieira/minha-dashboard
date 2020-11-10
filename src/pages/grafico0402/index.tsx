import React, { PureComponent } from 'react';

import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



import datag401 from '../../repositories/grafico401';


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3mw50Lc9/';
  

  render() {
    
        const borda = 2;
        return (
            <div>
                <ScatterChart
                    width={600}
                    height={500}
                    margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <XAxis type="number" dataKey="x" name="faltas" unit=" faltas" reversed={true} tickSize={5} ticks={[20, 15, 10, 5, 0]}/>
                    <YAxis type="number" dataKey="y" name="nota" unit=" pnts" tickSize={7} ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3]}/>
                    <Tooltip cursor={{ strokeDasharray: '2 2' }} />
                    <Legend />
                    <Scatter data={datag401} fill="transparent" stroke="#fdcb6e" strokeWidth={borda} shape="circle" />
                    <Scatter name="Prova 1" fill="#ffeaa7"/>
                </ScatterChart>
                
                <a href="../grafico4"> Tudo </a>
                <a href="../grafico0402"> Prova 1 </a>
                <a href="../grafico0403"> Prova 2 </a>
                <a href="../grafico0404"> Trabalho 1 </a>
                <a href="../grafico0405"> Trabalho 2 </a>
            </div>
          
        );
  }
}