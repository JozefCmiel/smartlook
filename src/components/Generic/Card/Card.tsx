
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import styled from '@emotion/styled'


const CardContainer = styled.div`
  padding: 1.5rem 1.25rem;
  position: relative;
  background: white;
  width: 100%;
  box-shadow: 0 3px 6px rgba(#584a3c, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  transition-property: box-shadow, opacity;
  transition-duration: $transition-time;
  transition-timing-function: ease-in;
  height: 100%;
  overflow: auto;
`

interface Props {
    children: JSX.Element
}

function Card({children}: Props): JSX.Element {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  );
}

export default Card;
