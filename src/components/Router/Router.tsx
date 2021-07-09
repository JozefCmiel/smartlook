
import {
  Route,
  BrowserRouter
} from "react-router-dom";

import { LeftNavBar, Scene } from "~frontendComponents";
import { HomePage, UsersPage } from "~pages";




function Router() {
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
}

export default Router;
