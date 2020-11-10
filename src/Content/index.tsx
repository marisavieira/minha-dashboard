import React from 'react';

import{
    Container,
} from  './styles';

const Content: React.FC = ({ children }) =>{
     return (
         <div>
            <Container>
                {children}
            </Container>
         </div>
     );
}

export default Content;