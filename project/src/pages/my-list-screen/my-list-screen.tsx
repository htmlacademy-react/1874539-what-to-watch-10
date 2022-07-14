import FilmCard from '../../components/film-card/film-card';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';

function MyListScreen(): JSX.Element {
  const filmCards: JSX.Element[] = Array(9)
    .fill(null)
    .map((_, index) => {
      const key = `sorry, but i have not unique id =( ${index}`;
      return <FilmCard key={key} />;
    });

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
        <div className='catalog__films-list'>{filmCards}</div>
      </section>
      <PageFooter />
    </div>
  );
}

export default MyListScreen;
