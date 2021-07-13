/** @jsxImportSource @emotion/react */
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import { css } from '@emotion/react';
import styled from '@emotion/styled';


const RowContainer = styled.div`
  padding: 1rem;
  display: flex;
`;

interface Props {
    children: Array<JSX.Element>
    column?: boolean
}

const Row = function({ children, column }: Props): JSX.Element {
    return (
        <RowContainer css={css`
          flex-direction: ${column ? 'column' : 'row'}
          `}>
            {children}
        </RowContainer>
    );
};

export default Row;
