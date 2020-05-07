import React, {useEffect} from "react";
import {ConnectedRouter} from "connected-react-router";
import WebFont from "webfontloader";
import {Provider} from "react-redux";
import {Route, Switch} from "react-router-dom";
import Modal from "react-modal";
import {ModalGateway} from "react-images";

import "bootstrap/dist/css/bootstrap-grid.css";
import "App/__styles__/App.scss";

import store, {history} from "App/__store__/";
import {ROUTES, ROLES} from "App/constants";
import PrivateRoute from "App/__components__/PrivateRoute";

import Home from "Pages/Home";
import Accounts from "Pages/Accounts";
import UserDashboard from "User/Dashboard";
import RouteNotFound from "Pages/RouteNotFound";

WebFont.load({
  google: {
    families: [
      "Montserrat:300,400,600,700",
      "Source Sans Pro:300,400,500,600,700",
    ],
  },
});

Modal.setAppElement(document.getElementById("root"));

function App() {
  useEffect(() => {
    document.title = "Cardistry Stats";
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ACCOUNTS.BASE} component={Accounts} />
          <PrivateRoute path={ROUTES.USER.BASE} role={ROLES.USER} component={UserDashboard} />
          <Route component={RouteNotFound} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
