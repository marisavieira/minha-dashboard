import React from 'react';

import{
    Grid,
} from  './styles';

import Aside from '../Aside'
import ContentHeader from '../ContentHeader'
import Content from '../Content'

const Layout: React.FC = ({children}) =>{
     return (
         <Grid>
             <Aside/>
             <Content>
                 {children}
             </Content>
         </Grid>
     );
}

export default Layout;