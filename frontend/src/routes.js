import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import React from "react";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<Logon />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/incidents/new" element={<NewIncident />} />
      </Switch>
    </Router>
  );
};

export default Routes;
