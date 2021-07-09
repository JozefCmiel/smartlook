
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import styled from '@emotion/styled'


const Container = styled.div`
  margin-left: 12rem;
  padding: 2rem;
`

interface Props {
  children: JSX.Element
}


function Main({ children } : Props): JSX.Element {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Main;
