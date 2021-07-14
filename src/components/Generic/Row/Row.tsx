/** @jsxImportSource @emotion/react */
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';


const RowContainer = styled.div`
  padding: 1rem;
  display: flex;
`;

interface Props {
    children: React.ReactNode
    column?: boolean
}

const Row: React.FC<Props> = function({ children, column }: Props) {
    return (
        <RowContainer css={css`
          flex-direction: ${column ? 'column' : 'row'}
          `}>
            {children}
        </RowContainer>
    );
};

export default Row;
