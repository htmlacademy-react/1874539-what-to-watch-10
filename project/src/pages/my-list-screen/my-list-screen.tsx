import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';

import { Film } from '../../types/film';

type MyListScreenProps = {
  films: Film[];
};

function MyListScreen({ films }: MyListScreenProps): JSX.Element {
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo />
        <h1 className='page-title user-page__title'>
          My list <span className='user-page__film-count'>9</span>
        </h1>
        <ul className='user-block'>
          <li className='user-block__item'>
            <div className='user-block__avatar'>
              <img src='img/avatar.jpg' alt='User avatar' width={63} height={63} />
            </div>
          </li>
          <li className='user-block__item'>
            <a className='user-block__link'>Sign out</a>
          </li>
        </ul>
      </header>
      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        <FilmsList films={films} />
      </section>
      <PageFooter />
    </div>
  );
}

export default MyListScreen;
