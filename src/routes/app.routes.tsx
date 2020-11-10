import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../layout/index';
import Grafico1Vs1 from '../pages/graficoUm/graficoBarrasEx1';
import Grafico1Vs1Cresc from '../pages/graficoUm/graficoBarrasEx1/segundo';
import Grafico1Vs2 from '../pages/graficoUm/graficoBarrasEx1/exemplo2';
import Grafico1Vs3 from '../pages/graficoUm/graficoBarrasEx1/exemplo3';

import Grafico2Vs1 from '../pages/grafico2/index';
import Grafico2Vs2 from '../pages/grafico2/exemplo2';
import Grafico2Vs3 from '../pages/grafico2/exemplo3';

import Grafico3Vs1 from '../pages/grafico3/index';
import Grafico3Vs2 from '../pages/grafico3/exemplo2';
import Grafico3Vs3 from '../pages/grafico3/exemplo3';

import Grafico4Vs1 from '../pages/grafico4/index';
import Grafico0402 from '../pages/grafico0402/index';
import Grafico0403 from '../pages/grafico0403/index';
import Grafico0404 from '../pages/grafico0404/index';
import Grafico0405 from '../pages/grafico0405/index';
import Grafico4Vs2 from '../pages/grafico4/exemplo2';
import Grafico4Vs3 from '../pages/grafico4/exemplo3';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Grafico1Vs1}/>
            <Route path="/Grafico1Vs1" component={Grafico1Vs1}/>
            <Route path="/Grafico1Vs1Cresc" component={Grafico1Vs1Cresc}/>
            <Route path="/Grafico1Vs2" component={Grafico1Vs2}/>
            <Route path="/Grafico1Vs3" component={Grafico1Vs3}/>

            <Route path="/Grafico2Vs1" component={Grafico2Vs1}/>
            <Route path="/Grafico2Vs2" component={Grafico2Vs2}/>
            <Route path="/Grafico2Vs3" component={Grafico2Vs3}/>

            <Route path="/Grafico3Vs1" component={Grafico3Vs1}/>
            <Route path="/Grafico3Vs2" component={Grafico3Vs2}/>
            <Route path="/Grafico3Vs3" component={Grafico3Vs3}/>

            <Route path="/Grafico4Vs1" component={Grafico4Vs1}/>
            <Route path="/grafico0402" component={Grafico0402}/>
            <Route path="/grafico0403" component={Grafico0403}/>
            <Route path="/grafico0404" component={Grafico0404}/>
            <Route path="/grafico0405" component={Grafico0405}/>
            <Route path="/Grafico4Vs2" component={Grafico4Vs2}/>
            <Route path="/Grafico4Vs3" component={Grafico4Vs3}/>
        </Switch>
    </Layout>
    
);

export default AppRoutes;