
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Row } from '~frontendComponents/Generic';
import styled from '@emotion/styled'


import { RootState } from '~frontendDucks/ducks';
import { getUsersRequest } from '~frontendDucks/users'
import {InfoField} from './components';
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.4;

`
const Title = styled.div`
  padding: 0 0.5rem;
  border-bottom: 1px solid rgba(88, 74, 60, 0.3);

`
//TODO: Zobrazit vsechny informace, zlepsit styly
function User() {
  const selectedUser = useSelector((state: RootState) => state.users.users.byId[state.users.selectedUser || 0]) || {}
  return (
        <Card>
          <>
            <Title>User </Title>
            {selectedUser.id ?
              <>
                  <InfoField
                    value={selectedUser.name}
                    label={"Name"}
                  />
                  <InfoField
                      value={selectedUser.username}
                      label={"Username"}
                  />
                  <InfoField
                      value={selectedUser.email}
                      label={"Email"}
                  />
                  <InfoField
                      value={selectedUser.phone}
                      label={"Phone"}
                  />
                  <InfoField
                      value={`${selectedUser.address.city}, ${selectedUser.address.street}`}
                      label={"Address"}
                    />
              </> :
               <Overlay />}

          </>
        </Card>
  );
}



export default User;
