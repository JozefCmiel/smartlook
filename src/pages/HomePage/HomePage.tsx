
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import { connect } from 'react-redux';
import { Row, Col } from '~frontendComponents/Generic';

import { getUsersRequest } from '~frontendDucks/users';
import { PostsList, Post } from './components'




function HomePage() {
  return (
        <Row>
          <Col>
              <PostsList />

          </Col>
          <Col>
              <Post />
          </Col>
        </Row>
  );
}



export default HomePage;
