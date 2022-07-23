import { Link } from 'react-router-dom';

import VideoPlayer from '../video-player/video-player';

import { Film } from '../../types/film';

type FilmCardProps = Film & {
  makeFilmCardActive: (id: string | null) => void;
  isActive: boolean;
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const {
    id,
    title,
    images: { posterUrl },
    videos: { trailerUrl },
    makeFilmCardActive,
    isActive,
  } = props;

  const handleOnMouseOver = (): void => {
    makeFilmCardActive(id);
  };

  const handleOnMouseOut = (): void => {
    makeFilmCardActive(null);
  };

  return (
    <article
      className='small-film-card catalog__films-card'
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      <div className='small-film-card__image'>
        {isActive ? (
          <VideoPlayer videoSrc={trailerUrl} posterSrc={posterUrl} />
        ) : (
          <img src={posterUrl} alt={title} width={280} height={175} />
        )}
      </div>
      <h3 className='small-film-card__title'>
        <Link className='small-film-card__link' to={`/films/${id}`}>
          {title}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
