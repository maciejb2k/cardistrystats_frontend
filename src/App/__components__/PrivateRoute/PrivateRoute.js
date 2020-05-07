import React from "react";
import {useSelector} from "react-redux";
import {Route, Redirect} from "react-router-dom";

import {ROUTES} from "App/constants";
import {getUserRole} from "App/__helpers__/user";

export default function PrivateRoute({component: Component, ...rest}) {
  const isAuthenticated = useSelector((state) => state.accounts.isAuthenticated);
  const role = getUserRole();

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated && role === rest.role ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: ROUTES.HOME,
            state: {
              from: props.location,
            },
          }}/>
        );
      }
      }
    />
  );
}
