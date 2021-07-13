/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import styled from '@emotion/styled';


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

const Drawer = function(props: {children: JSX.Element}): JSX.Element {
    return (
        <Container>
            <MenuContainer>
                {props.children}
            </MenuContainer>
        </Container>
    );
};

export default Drawer;
