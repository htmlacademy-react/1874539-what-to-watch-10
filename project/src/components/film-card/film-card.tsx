import { Link } from 'react-router-dom';

import { Film } from '../../types/film';

type FilmCardProps = Film & {
  makeFilmCardActive: (id: string) => void;
  isActive: boolean;
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const {
    id,
    title,
    images: { posterUrl },
    makeFilmCardActive,
    isActive,
  } = props;

  const handleOnMouseOver = () => {
    makeFilmCardActive(id);
  };

  const handleOnActive = () => isActive;

  if (isActive) {
    handleOnActive();
  }

  return (
    <article className='small-film-card catalog__films-card' onMouseOver={handleOnMouseOver}>
      <div className='small-film-card__image'>
        <img src={posterUrl} alt={title} width={280} height={175} />
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
