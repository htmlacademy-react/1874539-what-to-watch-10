type FilmReview = {
  ratingScore: number;
  text: string;
};

export type Film = {
  id: string;
  title: string;
  genres: string[];
  releaseYear: number;
  images: {
    posterUrl: string;
  };
  videos: {
    trailerUrl: string;
  };
  reviews: FilmReview[];
  description: string;
  director: string;
  actors: string[];
};
