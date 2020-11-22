import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../page/home";
import Invitation from "../page/invitation";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:email">
          <Invitation />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {};

export default Router;
