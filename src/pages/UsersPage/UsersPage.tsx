/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import { Row, Col } from '~frontendComponents/Generic';


import { UserList, User } from './components';


const UsersPage: React.FC = function() {
    return (
        <Row>
            <Col list>
                <UserList />
            </Col>
            <Col>
                <User />
            </Col>
        </Row>
    );
};


export default UsersPage;
