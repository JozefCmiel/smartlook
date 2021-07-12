/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/

interface getComments {
  id: number
}

interface singleComment {
    id: number
    postId: number
    name: string
    email: string
    body: string
}

interface normalizedComments {
    ids: Array<number>
    byId:{ [key: number]: singleComment}
}
interface Comments {
  comments: normalizedComments
  loading: boolean
  error: string | null
}

export type { singleComment, normalizedComments, Comments, getComments };
