
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import {  useEffect} from 'react';
import { connect } from 'react-redux';
import { css, Global } from "@emotion/react";
import { Button } from '@material-ui/core';
import { getUsersRequest } from '../../ducks/users/users';

interface Props {
  getUsers: any
}



function UsersPage({getUsers} : Props) {
  useEffect(() => {
    console.log('gettingUsers');
    getUsers();
  }, [])
  return (

        <>
            awat
        </>

  );
}
const mapStateToProps = () => ({

});

const mapDispatchToProps = {
  getUsers: getUsersRequest,
};

const UserPageMain = connect(mapStateToProps, mapDispatchToProps)(UsersPage);
export default UserPageMain;
