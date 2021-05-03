import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../context/Auth';

interface PublicRouteProps {
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path: string;
  exact: boolean;
}

const PublicRoute = (props: PublicRouteProps): JSX.Element => {
  const { user } = useContext(AuthContext);
  return user.auth ? (
    <Redirect to="/all-books" />
  ) : (
    <Route exact={props.exact} path={props.path} component={props.component} />
  );
};

export default PublicRoute;
