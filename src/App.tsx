/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import {  Router } from "~frontendComponents";
import { Provider } from 'react-redux';


import store from './ducks/store';

function App() {
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
}

export default App;
