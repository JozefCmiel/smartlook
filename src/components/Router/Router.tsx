/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Author: jcmiel                                             *
\************************************************************/
import {
    Route,
    BrowserRouter
} from 'react-router-dom';

import { LeftNavBar, Scene } from '~frontendComponents';
import { HomePage, UsersPage } from '~pages';


const Router = function() {
    return (
        <BrowserRouter>
            <div>
                <LeftNavBar />
                <Scene>
                    <>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/users" component={UsersPage}/>
                    </>
                </Scene>
            </div>
        </BrowserRouter>
    );
};

export default Router;
