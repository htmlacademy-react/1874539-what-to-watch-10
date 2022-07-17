import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';

import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../../hocs/private-route';
import { Film } from '../../types/film';

type AppProps = {
  films: Film[];
};

function App({ films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen films={films} />} />
        <Route path={AppRoute.SignIn} element={<SignInScreen />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute autorisationStatus={AuthorizationStatus.Auth}>
              <MyListScreen films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<FilmScreen films={films} />} />
        <Route path={AppRoute.AddReview} element={<AddReviewScreen films={films} />} />
        <Route path={AppRoute.Player} element={<PlayerScreen films={films} />} />
        <Route path={AppRoute.NotFound} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
