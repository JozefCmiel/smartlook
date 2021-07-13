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
import { setSelectedPost } from '~frontendDucks/posts';


const PostsCard = styled.div`
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


const PostsItem = function({ item } : Props) {
    const dispatch = useDispatch();

    const post = useSelector((state: RootState) => state.posts.posts.byId[item]);
    const authorName = useSelector((state: RootState) => state.users.users.byId[post.userId]?.name);

    const isSelected = useSelector((state: RootState) => state.posts.selectedPost === item);

    const doSetSelectedUser = () => {
        dispatch(setSelectedPost(item));
    };

    return (
        <PostsCard
            onClick={doSetSelectedUser}
            css={css`
            background-color: ${isSelected ? 'rgba(78, 204, 163, 0.2)' : 'white'};
        `}
        >
            <div>
                {post.title}
                { // Cover to long string with css
                }
            </div>
            <small>{authorName}</small>
        </PostsCard>
    );
};

export default PostsItem;
