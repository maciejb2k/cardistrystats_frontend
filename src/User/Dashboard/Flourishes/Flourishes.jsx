import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {ROUTES} from "App/constants";

import FlourishesList from "./FlourishesList";
import FlourishesAdd from "./FlourishesAdd";
import FlourishesPreview from "./FlourishesPreview";

export default function Flourishes() {
  return (
    <Switch>
      <Route exact path={ROUTES.USER.FLOURISHES.LIST} component={FlourishesList} />
      <Route exact path={ROUTES.USER.FLOURISHES.ADD} component={FlourishesAdd} />
      <Route exact path={ROUTES.USER.FLOURISHES.PREVIEW} component={FlourishesPreview} />
      <Redirect to={ROUTES.HOME} />
    </Switch>
  );
}
