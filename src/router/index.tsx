import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Spinner from '../components/common/spinner';
import {
  ALL_BOOKS_APP_ENDPOINT,
  SETTINGS_APP_ENDPOINT,
  START_APP_ENDPOINT,
  YOUR_ORDERS_APP_ENDPOINT,
} from '../constans';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Home = lazy(() => import('../components/pages/Home'));
const AllBooks = lazy(() => import('../components/pages/AllBooks'));
const Order = lazy(() => import('../components/pages/YourOrders'));
const Setting = lazy(() => import('../components/pages/Settings'));
const Book = lazy(() => import('../components/pages/Book'));

const ApplicationRouter = (): JSX.Element => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <PublicRoute exact path={START_APP_ENDPOINT} component={Home} />
        <PrivateRoute path={ALL_BOOKS_APP_ENDPOINT} component={AllBooks} />
        <PrivateRoute path={SETTINGS_APP_ENDPOINT} component={Setting} />
        <PrivateRoute path={YOUR_ORDERS_APP_ENDPOINT} component={Order} />
        <PrivateRoute path={'/book/:id'} component={Book} />
      </Switch>
    </Suspense>
  </Router>
);

export default ApplicationRouter;
