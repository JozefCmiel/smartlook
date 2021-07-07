
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import styled from '@emotion/styled'


const Container = styled.div`
  margin-left: 12rem;
`


function Main(props: {children: JSX.Element}): JSX.Element {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default Main;
