import { Route, Switch } from "react-router";
import { HOME, LOGIN } from "./CONSTRAINTS";
import Home from "../pages/Home"
import Login from "../pages/Login"
import { NotFound } from "./NotFound";

export const RouterConfig = () => {
    return (
      <div>
        <Switch>
          {/* List all public routes here */}
          <Route exact path={HOME} component={Home} />
          <Route exact path={LOGIN} component={Login} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    );
  };