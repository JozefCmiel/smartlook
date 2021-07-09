
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import styled from '@emotion/styled'


const RowContainer = styled.div`
  padding: 1rem;
  display: flex;
`

interface Props {
    children: Array<JSX.Element>
}

function Row({children}: Props): JSX.Element {
  return (
    <RowContainer>
      {children}
    </RowContainer>
  );
}

export default Row;
