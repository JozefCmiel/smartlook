/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/


interface company {
    name: string
    catchPhrase: string
    bs: string
}

interface geo {
    lat: string
    lng: string
}

interface address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: geo
}

interface singlePost {
    id: number
    name: string
    username: string
    email: string
    address: address
    phone: string
    website: string
    company: company
}

interface normalizedUser {
    ids: Array<string>
    byId:{ [key: string]: singlePost}
}

export interface Users {
  users: normalizedUser
  loading: boolean
  error: string | null
}

