
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Row } from '~frontendComponents/Generic';
import styled from '@emotion/styled'


import { RootState } from '~frontendDucks/ducks';
import { setSelectedUser } from '~frontendDucks/users';
import { Comments } from './components';

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

function Post() {
  const dispatch = useDispatch();
  const selectedPost = useSelector((state: RootState) => state.posts.posts.byId[state.posts.selectedPost || 0]) || {}
  const authorName = useSelector((state: RootState) => state.users.users.byId[selectedPost.userId]?.name)

  const doSetSelectedUser = () => {
    dispatch(setSelectedUser(selectedPost.userId))
  }
  return (
        <Card>
          <>
            <Title>{selectedPost.title} </Title>
            {selectedPost.id ?  <></> : <Overlay />}
            <p>{selectedPost.body}</p>
            <p onClick={doSetSelectedUser}>{authorName}</p>
            <Comments item={selectedPost.id} />
          </>
        </Card>
  );
}



export default Post;
