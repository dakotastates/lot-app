import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, loggedInStatus, ...rest }) {

  return (
    <Route
      {...rest}
      render={(props) => {
        return loggedInStatus ? (
          <Component loggedInStatus={loggedInStatus} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
}
