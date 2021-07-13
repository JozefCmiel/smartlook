/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import { useSelector } from 'react-redux'
;
import styled from '@emotion/styled';

import { Card,  } from '~frontendComponents/Generic';
import { RootState } from '~frontendDucks/ducks';


import { InfoField } from './components';


const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.4;
  top: 0;
  left: 0;

`;
const Title = styled.div`
  padding: 0 0.5rem;
  border-bottom: 1px solid rgba(88, 74, 60, 0.3);

`;
//TODO: Zobrazit vsechny informace, zlepsit styly
const User = function() {
    const selectedUser = useSelector((state: RootState) => state.users.users.byId[state.users.selectedUser || 0]) || {};
    return (
        <Card>
            <>
                <Title>User </Title>
                {selectedUser.id ?
                    <>
                        <InfoField
                            value={selectedUser.name}
                            label={'Name'}
                        />
                        <InfoField
                            value={selectedUser.username}
                            label={'Username'}
                        />
                        <InfoField
                            value={selectedUser.email}
                            label={'Email'}
                        />
                        <InfoField
                            value={selectedUser.phone}
                            label={'Phone'}
                        />
                        <InfoField
                            value={`${selectedUser.address.city}, ${selectedUser.address.street}`}
                            label={'Address'}
                        />
                    </> :
                    <Overlay />}

            </>
        </Card>
    );
};


export default User;
