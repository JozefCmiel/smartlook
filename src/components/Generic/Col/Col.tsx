
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import styled from '@emotion/styled'


const ColContainer = styled.div`
    margin: 0 1rem;
`

interface Props {
    children: JSX.Element
}

function Col({children}: Props): JSX.Element {
  return (
    <ColContainer>
      {children}
    </ColContainer>
  );
}

export default Col;
