import { Switch, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
