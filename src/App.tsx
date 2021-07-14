/** @jsxImportSource @emotion/react */ //eslint-disable-line
/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import React from 'react';
import { css, Global } from '@emotion/react';
import { Provider } from 'react-redux';

import { Router } from '~frontendComponents';


import store from './ducks/store';


const App: React.FC = function() {
    return (
        <Provider store={store}>
            <Global
                styles={css`
          body {
            font-family: -apple-system, BlinkMacSystemFont, "avenir next",
              avenir, "helvetica neue", helvetica, Ubuntu, roboto, noto,
              "segoe ui", arial, sans-serif;
            color: #232931;
            background-color: #5F9580;
            overflow: hidden;
          }

          & * {
            box-sizing: border-box;
          }
          a {
            text-decoration: none;
            color: unset;
          }
          a:active {
            color: #4ecca3;
          }
          a:hover {
            color: #4ecca3;
          }
          .drawer {
            background-color: #393E46;
          }

        `}
            />
            <Router />
        </Provider>
    );
};

export default App;
