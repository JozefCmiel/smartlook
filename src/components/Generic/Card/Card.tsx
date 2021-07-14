/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import React from 'react';
import styled from '@emotion/styled';


const CardContainer = styled.div`
  padding: 1.5rem 1.25rem;
  position: relative;
  background: white;
  width: 100%;
  box-shadow: 0 3px 6px rgba(88, 74, 60, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  transition-property: box-shadow, opacity;
  transition-timing-function: ease-in;

`;

interface Props {
    children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    );
};

export default Card;
