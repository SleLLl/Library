import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../context/Auth';

interface PrivateRouteProps {
  component?:
    | React.ComponentType<RouteComponentProps<never>>
    | React.ComponentType<unknown>;
  path: string;
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const { user } = useContext(AuthContext);
  return user.auth ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
