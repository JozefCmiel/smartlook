
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '~frontendComponents/Generic';
import styled from '@emotion/styled'

import { RootState } from '~frontendDucks/ducks';
import { getUsersRequest } from '~frontendDucks/users'
import UserItem from './components/UserItem';

const Title = styled.div`
  padding: 0 0.5rem;
  border-bottom: 1px solid rgba(88, 74, 60, 0.3);

`

function UsersList() {
  const dispatch = useDispatch()
  const list = useSelector((state: RootState) => state.users.users.ids)
    useEffect(() => {
      dispatch(getUsersRequest());
    }, [])
  return (
        <Card>
          <>
            <Title>User list </Title>

              { list.map((item: string) =>(
                    <UserItem
                      key={item}
                      item={item}
                    />)
              )}
          </>
        </Card>
  );
}

export default UsersList;
