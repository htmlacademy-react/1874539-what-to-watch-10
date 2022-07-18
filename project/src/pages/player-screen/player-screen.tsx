import { Link, useParams } from 'react-router-dom';

import NotFoundScreen from '../not-found-screen/not-found-screen';

import { Film } from '../../types/film';

type PlayerScreenProps = {
  films: Film[];
};

function PlayerScreen({ films }: PlayerScreenProps): JSX.Element {
  const params = useParams();

  const currentFilm = films.find((film) => film.id === params.id);

  if (currentFilm) {
    const {
      id,
      title,
      images: { posterUrl },
      videos: { trailerUrl },
    } = currentFilm;

    return (
      <div className='player'>
        <video src={trailerUrl} className='player__video' poster={posterUrl} />
        <Link className='player__exit' to={`/films/${id}`}>
          Exit
        </Link>
        <div className='player__controls'>
          <div className='player__controls-row'>
            <div className='player__time'>
              <progress className='player__progress' value={30} max={100} />
              <div className='player__toggler' style={{ left: '30%' }}>
                Toggler
              </div>
            </div>
            <div className='player__time-value'>1:30:29</div>
          </div>
          <div className='player__controls-row'>
            <button type='button' className='player__play'>
              <svg viewBox='0 0 19 19' width={19} height={19}>
                <use xlinkHref='#play-s' />
              </svg>
              <span>Play</span>
            </button>
            <div className='player__name'>{title}</div>
            <button type='button' className='player__full-screen'>
              <svg viewBox='0 0 27 27' width={27} height={27}>
                <use xlinkHref='#full-screen' />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <NotFoundScreen />;
}

export default PlayerScreen;
