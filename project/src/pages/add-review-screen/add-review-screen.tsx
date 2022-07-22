import { Link, useLocation, useParams } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import { Film } from '../../types/film';
import AddReviewForm from '../../components/add-review-form/add-review-form';

type AddReviewScreenProps = {
  films: Film[];
};

function AddReviewScreen({ films }: AddReviewScreenProps): JSX.Element {
  const params = useParams();
  const location = useLocation();

  const currentFilm = films.find((film) => film.id === params.id);

  if (currentFilm) {
    const {
      id,
      title,
      images: { posterUrl },
    } = currentFilm;

    return (
      <section className='film-card film-card--full'>
        <div className='film-card__header'>
          <div className='film-card__bg'>
            <img src={posterUrl} alt={title} />
          </div>
          <h1 className='visually-hidden'>WTW</h1>
          <header className='page-header'>
            <Logo />
            <nav className='breadcrumbs'>
              <ul className='breadcrumbs__list'>
                <li className='breadcrumbs__item'>
                  <Link className='breadcrumbs__link' to={`/films/${id}`}>
                    {title}
                  </Link>
                </li>
                <li className='breadcrumbs__item'>
                  <Link className='breadcrumbs__link' to={location.pathname}>
                    Add review
                  </Link>
                </li>
              </ul>
            </nav>
            <ul className='user-block'>
              <li className='user-block__item'>
                <div className='user-block__avatar'>
                  <img src='img/avatar.jpg' alt='User avatar' width={63} height={63} />
                </div>
              </li>
              <li className='user-block__item'>
                <Link className='user-block__link' to='/login'>
                  Sign out
                </Link>
              </li>
            </ul>
          </header>
          <div className='film-card__poster film-card__poster--small'>
            <img src={posterUrl} alt={title} width={218} height={327} />
          </div>
        </div>
        <AddReviewForm />
      </section>
    );
  }

  return <NotFoundScreen />;
}

export default AddReviewScreen;
