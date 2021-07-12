
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import styled from '@emotion/styled'


const TextField = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 0.5rem;

`

interface Props {
    label: string
    value: string
}

function InfoField({label, value}: Props) {
  return (
        <TextField>
              {label}:  {value}
        </TextField>
  );
}



export default InfoField;
