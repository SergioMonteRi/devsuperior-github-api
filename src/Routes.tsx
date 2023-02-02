import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/Navbar";

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
