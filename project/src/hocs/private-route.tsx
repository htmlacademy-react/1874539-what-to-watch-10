import { Navigate } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../const';

type PrivateRouteProps = {
  autorisationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({ autorisationStatus, children }: PrivateRouteProps): JSX.Element {
  return autorisationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateRoute;
