import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { films } from './mocks/films';

const filmPromo = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: new Date(2014, 2, 13),
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App filmPromo={filmPromo} films={films} />
  </React.StrictMode>
);
