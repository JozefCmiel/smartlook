/** @jsxImportSource @emotion/react */
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux'
;

import { RootState } from '~frontendDucks/ducks';
import { getCommentsRequest } from '~frontendDucks/comments';


const CommentCard = styled.div`
    padding: 1rem 0.5rem;
    border-bottom: 1px solid rgba(88, 74, 60, 0.1);
    cursor: pointer;

`;
const CommentTitle = styled.h4`
    border-bottom: 1px solid rgba(78, 204, 163, 0.2);
    border-radius: 2px;
`;

const CommentSAuthor = styled.span`
    margin: 0 0.5rem;
`;
interface Props {
    item: number
  }

interface PropsComments {
  item: number
}

const Comment: React.FC<Props> = function({ item }) {
    const [ state, setState ] = useState({
        open: false
    }); // Just to use react hooks in this project
    const commentById = useSelector((state: RootState) => state.comments.comments.byId[item]);
    const { open } = state;
    const openComment = () => {
        setState({ open: !open });
    };

    return (
        <CommentCard>
            <div>
                <CommentTitle>
                    {commentById.name}
                    <CommentSAuthor>({commentById.email})</CommentSAuthor>
                </CommentTitle>

                {open &&
                <>
                    <p>
                        {commentById.body}
                    </p>

                </>
                }
                <div onClick={openComment}>{open ? 'Show' : 'Hide'}</div>
            </div>
        </CommentCard>
    );
};

const Title = styled.h4`
  padding: 0 0.5rem;
  border-bottom: 1px solid rgba(88, 74, 60, 0.3);
`;


const Comments: React.FC<PropsComments> = function({ item }) {
    const dispatch = useDispatch();

    const commentsIds = useSelector((state: RootState) => state.comments.comments.ids);

    useEffect(() => {
        dispatch(getCommentsRequest({ id: item }));
    }, [ item ]);

    return (
        <>
            <Title>Comments</Title>
            { commentsIds.map((item: number) => (
                <Comment
                    key={item}
                    item={item}
                />))}
        </>
    );
};

export default Comments;
