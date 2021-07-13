/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import styled from '@emotion/styled'
;


const ColContainer = styled.div`
    margin: 0 1rem;
    overflow: auto;
    max-height: 85vh;
    width: 66%;
`;

const ColContainerList = styled.div`
    margin: 0 1rem;
    overflow: auto;
    max-height: 85vh;
    width: 33%;
`;


interface Props {
    children: JSX.Element
    list?: boolean
}

const Col = function({ children, list }: Props): JSX.Element {
    if (list) {
        return (
            <ColContainerList >
                {children}
            </ColContainerList>
        );
    }
    return (
        <ColContainer >
            {children}
        </ColContainer>
    );
};

export default Col;
