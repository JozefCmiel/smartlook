/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import React from 'react';
import styled from '@emotion/styled';


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
    children: React.ReactNode
    list?: boolean
}

const Col : React.FC<Props> = function({ children, list }: Props) {
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
