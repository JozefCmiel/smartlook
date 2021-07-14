/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import React from 'react';
import styled from '@emotion/styled';


const Container = styled.div`
  margin-left: 12rem;
  padding: 2rem;
`;

interface Props {
  children: JSX.Element
}


const Scene: React.FC<Props> = function({ children } : Props): JSX.Element {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default Scene;
