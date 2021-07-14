/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

interface singlePost {
    id: number
    userId: number
    title: string
    body: string
}
interface normalizedPosts {
    ids: Array<number>
    byId:{ [key: number]: singlePost}
}
interface Posts {
  posts: normalizedPosts
  loading: boolean
  error: string | null
  selectedPost: number | null
}

interface apiGetPosts {
  [index: number]: singlePost
}

export type { singlePost, Posts, normalizedPosts, apiGetPosts };
