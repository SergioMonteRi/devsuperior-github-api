import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import ProfileSearch from "./pages/ProfileSearch";

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/searchprofile" exact>
        <ProfileSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
