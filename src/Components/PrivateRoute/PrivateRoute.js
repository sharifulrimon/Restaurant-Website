import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { userContext, UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
  const [loggedinUser,setLoggedinUser] = useContext(userContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedinUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;
