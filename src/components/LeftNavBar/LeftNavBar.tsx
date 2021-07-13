/** @jsxImportSource @emotion/react */
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import React, { useEffect } from 'react';
import {
    Link
} from 'react-router-dom';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { Drawer } from '~frontendComponents/Generic';
import { Logo } from '~frontendComponents';
import { getPostsRequest } from '~frontendDucks/posts';
import { getUsersRequest } from '~frontendDucks/users';


const NavBarButton = styled(Link)`
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    display: flex;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    justify-content: flex-start;
    text-decoration: none;
    color: inherit;
    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    position: relative;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);

        a {
            color: #4ecca3;
        }
    }
`;

const NavBarPosition = styled.div`
    flex: 1 1 auto;
    min-width: 0;
    margin-top: 4px;
    margin-bottom: 4px;
`;

const NavBarSpan = styled.div`
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
`;

const NavBar = styled.div`
    display: flex;
    flex-direction: column;
`;


const LeftNavBar = function() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostsRequest());
        dispatch(getUsersRequest());
    }, []);
    return (
        <Drawer>
            <NavBar>
                <Logo />
                {[ { path: '/', text: 'Home' }, { path: '/users', text: 'Users' }, ].map(
                    (item: {text: string; path: string}) => (
                        <NavBarButton to={item.path} key={item.text}>
                            <NavBarPosition>
                                <NavBarSpan>
                                    {item.text}
                                </NavBarSpan>
                            </NavBarPosition>
                        </NavBarButton>
                    )
                )}
            </NavBar>
        </Drawer>
    );
};

export default LeftNavBar;