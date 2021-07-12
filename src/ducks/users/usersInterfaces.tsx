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

interface singleUser {
    id: number
    name: string
    username: string
    email: string
    address: address
    phone: string
    website: string
    company: company
}
interface normalizedUsers {
    ids: Array<number>
    byId:{ [key: number]: singleUser}
}
interface Users {
  users: normalizedUsers
  loading: boolean
  error: string | null
  selectedUser: number | null
}

export type { singleUser, Users, normalizedUsers };
