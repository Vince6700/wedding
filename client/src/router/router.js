import { BrowserRouter, Switch, Route } from "react-router-dom";
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
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {};

export default Router;
