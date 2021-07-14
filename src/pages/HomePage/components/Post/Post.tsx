/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import { useDispatch, useSelector } from 'react-redux'
;
import styled from '@emotion/styled';
import {
    Link
} from 'react-router-dom';

import { Card } from '~frontendComponents/Generic';
import { RootState } from '~frontendDucks/ducks';
import { setSelectedUser } from '~frontendDucks/users';

import { Comments } from './components';


const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.4;
  top: 0;
  left: 0;

`;
const PostBody = styled.p`
  padding: 0 0.5rem;
`;

const PostAuthor = styled(Link)`
  padding: 0 0.5rem;
`;

const Title = styled.h3`
  padding: 0 0.5rem;
  border-bottom: 1px solid rgba(88, 74, 60, 0.3);
`;

const Post: React.FC = function() {
    const dispatch = useDispatch();
    const selectedPost = useSelector((state: RootState) => state.posts.posts.byId[state.posts.selectedPost || 0]) || {};
    const authorName = useSelector((state: RootState) => state.users.users.byId[selectedPost.userId]?.name);

    const doSetSelectedUser = () => {
        dispatch(setSelectedUser(selectedPost.userId));
    };

    return (
        <Card>
            <>
                <Title>{selectedPost.title} </Title>
                {selectedPost.id ?  <></> : <Overlay />}
                <PostBody>{selectedPost.body}</PostBody>
                <PostAuthor to="/users" onClick={doSetSelectedUser}>{authorName}</PostAuthor>

                <Comments item={selectedPost.id} />
            </>
        </Card>
    );
};


export default Post;
