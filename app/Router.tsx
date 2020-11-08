import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import PrivateRoute from './PrivateRoute';

const Home = React.lazy(() => import('@pages/Home'));
const Login = React.lazy(() => import('@pages/Login'));
const SignUp = React.lazy(() => import('@pages/SignUp'));
const CreateRoutine = React.lazy(() => import('@pages/CreateRoutine'));
const Records = React.lazy(() => import('@pages/Records'));
// [IMPORT NEW PAGE ABOVE] < Needed for generating containers seamlessly

const Router: React.FC = () => (
  <HashRouter basename="/">
    <Switch>
      <PrivateRoute exact path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/signup" render={() => <SignUp />} />
      <Route exact path="/create-routine" render={() => <CreateRoutine />} />
      <Route path="/records" render={() => <Records />} />
      {/* [INSERT NEW ROUTE ABOVE] < Needed for generating containers seamlessly */}
    </Switch>
  </HashRouter>
);

export default hot(Router);
