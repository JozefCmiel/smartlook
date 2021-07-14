/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import styled from '@emotion/styled';
import React from 'react';


const Container = styled.div`
  flex: 0 0 auto;
`;

const MenuContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  left: 0;
  right: auto;
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 1200;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  box-shadow: none;
  background-color: #393E46;
`;

interface Props {
  children: React.ReactNode
}

const Drawer: React.FC<Props> = function({ children }) {
    return (
        <Container>
            <MenuContainer>
                {children}
            </MenuContainer>
        </Container>
    );
};

export default Drawer;
