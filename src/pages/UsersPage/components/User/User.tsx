
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Row } from '~frontendComponents/Generic';
import styled from '@emotion/styled'
import { TextField }from '@material-ui/core';

import { RootState } from '~frontendDucks/ducks';
import { getUsersRequest } from '~frontendDucks/users'

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.4;

`

function User() {
  const selectedUser = useSelector((state: RootState) => state.users.users.byId[state.users.selectedUser]) || {}

  return (
        <Card>
          <Row >
            <Col>
              {selectedUser?.id ?  <></> : <Overlay />}
            </Col>
            <Col>
              <TextField value={selectedUser.name} label={"Name"}  />
            </Col>
            <Col>
              <TextField value={selectedUser.email} label={"Email"} />
            </Col>
            <Col>
              <TextField value={selectedUser.username} label={"Username"} />
            </Col>
            <Col>
              <TextField value={selectedUser.email} />
            </Col>
            <Col>
              <TextField value={selectedUser.email} />
            </Col>
          </Row>
        </Card>
  );
}



export default User;
