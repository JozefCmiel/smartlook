
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import {  useEffect} from 'react';
import { connect } from 'react-redux';
import { Row, Col } from '~frontendComponents/Generic';

import { getUsersRequest } from '~frontendDucks/users';
import { UserList, User } from './components'


interface Props {
  getUsers: any
}



function UsersPage() {
  return (
        <Row>
          <Col>
              <UserList />

          </Col>
          <Col>
              <User />
          </Col>
        </Row>
  );
}



export default UsersPage;
