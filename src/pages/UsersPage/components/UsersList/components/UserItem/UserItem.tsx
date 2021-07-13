/** @jsxImportSource @emotion/react */
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux'
;

import { RootState } from '~frontendDucks/ducks';
import { setSelectedUser } from '~frontendDucks/users';


const UserCard = styled.div`
    padding: 1rem 0.5rem;
    borderBottom: 1px solid rgba(88, 74, 60, 0.1);
    cursor: pointer;
    borderRadius: 2px;

  &:hover {
    background: rgba(88, 74, 60, 0.1);

  }
`;

interface Props {
  item: number
}


const UsersItem = function({ item } : Props) {
    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.users.users.byId[item]);
    const isSelected = useSelector((state: RootState) => state.users.selectedUser === item);

    const doSetSelectedUser = () => {
        dispatch(setSelectedUser(item));
    };

    return (
        <UserCard
            onClick={doSetSelectedUser}
            css={css`
            background-color: ${isSelected ? 'rgba(78, 204, 163, 0.2)' : 'white'};
        `}
        >
            <div>
                {user.name} ({user.username})
                { // Cover to long string with css
                }
            </div>
            <small>{user.email}</small>
        </UserCard>
    );
};

export default UsersItem;
