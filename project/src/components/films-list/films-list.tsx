import { useState } from 'react';

import FilmCard from '../film-card/film-card';

import { Film } from '../../types/film';

type FilmsListProps = {
  films: Film[];
};

function FilmsList({ films }: FilmsListProps): JSX.Element | null {
  const [activeFilmCardId, setActiveFilmCardId] = useState<string>('');

  const makeFilmCardActive = (id: string) => {
    setActiveFilmCardId(id);
  };

  if (!films.length) {
    return null;
  }

  return (
    <div className='catalog__films-list'>
      {films.map((film) => (
        <FilmCard
          key={film.id}
          makeFilmCardActive={makeFilmCardActive}
          isActive={film.id === activeFilmCardId}
          {...film}
        />
      ))}
    </div>
  );
}

export default FilmsList;
