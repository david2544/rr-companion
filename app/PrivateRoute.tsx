import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ render: renderComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => (currentUser ? renderComponent() : <Redirect to="/login" />)}
    ></Route>
  );
};

export default PrivateRoute;
