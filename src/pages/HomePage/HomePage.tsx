/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import { Row, Col } from '~frontendComponents/Generic';

import { PostsList, Post } from './components';


const HomePage = function() {
    return (
        <Row>
            <Col list>
                <PostsList />
            </Col>
            <Col>
                <Post />
            </Col>
        </Row>
    );
};


export default HomePage;
