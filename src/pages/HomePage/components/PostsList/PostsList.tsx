
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '~frontendComponents/Generic';
import styled from '@emotion/styled'

import { RootState } from '~frontendDucks/ducks';
import PostItem from './components/PostsItem';

const Title = styled.div`
  padding: 0 0.5rem;
  border-bottom: 1px solid rgba(88, 74, 60, 0.3);

`

function PostsList() {
  const list = useSelector((state: RootState) => state.posts.posts.ids)
  return (
        <Card>
          <>
            <Title>Posts list </Title>

              { list.map((item: number) =>(
                    <PostItem
                      key={item}
                      item={item}
                    />)
              )}
          </>
        </Card>
  );
}

export default PostsList;
