import styled from 'styled-components';

/**
* Layout
* AS = Aside
* CH = Content Header
* CT = Content
*/
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 180px auto;
    grid-template-rows: 70px auto;

    grid-template-areas:
    'AS CT'
    'AS CT';

    height: 100vh;

    
    overflow-y: hidden;

`;