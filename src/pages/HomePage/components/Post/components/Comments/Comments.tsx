
/** @jsxImportSource @emotion/react */
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

import { useEffect } from 'react';
import { css } from '@emotion/react'
import styled from '@emotion/styled'



import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~frontendDucks/ducks';
import { getCommentsRequest } from '~frontendDucks/comments';



const PostsCard = styled.div`
    padding: 1rem 0.5rem;
    borderBottom: 1px solid rgba(88, 74, 60, 0.1);
    cursor: pointer;
    borderRadius: 2px;

  &:hover {
    background: rgba(88, 74, 60, 0.1);

  }
`
interface Props {
    item: number
  }

interface PropsComments {
  item: number
}

function Comment({item}: Props) {
    const commentById = useSelector((state: RootState) => state.comments.comments.byId[item])
    return (
            <PostsCard>
                <div>
                {commentById.name}
                { // Cover to long string with css
                }
                </div>
        </PostsCard>
    )
}



function Comments({ item } : PropsComments) {
  const dispatch = useDispatch()

  const commentsIds = useSelector((state: RootState) => state.comments.comments.ids)

  useEffect(() => {
    dispatch(getCommentsRequest({ id:item }));
  }, [item])

  return (
      <>
    { commentsIds.map((item: number) =>(
        <Comment
          key={item}
          item={item}
        />)
  )}
  </>
  );
}

export default Comments;
