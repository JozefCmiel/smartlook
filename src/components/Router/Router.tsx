
import {
  Route,
  BrowserRouter
} from "react-router-dom";

import { LeftNavBar, Main } from "~frontendComponents";
import { HomePage, UsersPage } from "~pages";




function Router() {
  return (
       <BrowserRouter>
        <div>
          <LeftNavBar />
          <Main>
            <>
              <Route exact path="/" component={HomePage}/>
              <Route path="/users" component={UsersPage}/>
            </>
          </Main>
        </div>
      </BrowserRouter>
  );
}

export default Router;
