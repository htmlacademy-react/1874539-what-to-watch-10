import { Link } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';

import { Film } from '../../types/film';

type MainScreenProps = {
  films: Film[];
};

function MainScreen({ films }: MainScreenProps): JSX.Element {
  const getRandomFilmPromo = () => {
    if (films.length) {
      const randomIndex = Math.floor(Math.random() * (films.length - 1));
      return films[randomIndex];
    }

    return null;
  };

  const randomFilm = getRandomFilmPromo();

  return (
    <>
      <section className='film-card'>
        {randomFilm && (
          <div className='film-card__bg'>
            <img src={randomFilm.images.posterUrl} alt={randomFilm.title} />
          </div>
        )}
        <h1 className='visually-hidden'>WTW</h1>
        <header className='page-header film-card__head'>
          <Logo />
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
        {randomFilm && (
          <div className='film-card__wrap'>
            <div className='film-card__info'>
              <div className='film-card__poster'>
                <img src={randomFilm.images.posterUrl} alt={randomFilm.title} width={218} height={327} />
              </div>
              <div className='film-card__desc'>
                <h2 className='film-card__title'>{randomFilm.title}</h2>
                <p className='film-card__meta'>
                  <span className='film-card__genre'>{randomFilm.genres.toString()}</span>
                  <span className='film-card__year'>{randomFilm.releaseYear}</span>
                </p>
                <div className='film-card__buttons'>
                  <Link className='btn btn--play film-card__button' to={`/player/${randomFilm.id}`}>
                    <svg viewBox='0 0 19 19' width={19} height={19}>
                      <use xlinkHref='#play-s' />
                    </svg>
                    <span>Play</span>
                  </Link>
                  <Link className='btn btn--list film-card__button' to='/mylist'>
                    <svg viewBox='0 0 19 20' width={19} height={20}>
                      <use xlinkHref='#add' />
                    </svg>
                    <span>My list</span>
                    <span className='film-card__count'>{films.length}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>
          <ul className='catalog__genres-list'>
            <li className='catalog__genres-item catalog__genres-item--active'>
              <a href='#' className='catalog__genres-link'>
                All genres
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Comedies
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Crime
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Documentary
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Dramas
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Horror
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Kids &amp; Family
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Romance
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Sci-Fi
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>
                Thrillers
              </a>
            </li>
          </ul>
          <FilmsList films={films} />
          <div className='catalog__more'>
            <button className='catalog__button' type='button'>
              Show more
            </button>
          </div>
        </section>
        <PageFooter />
      </div>
    </>
  );
}

export default MainScreen;
