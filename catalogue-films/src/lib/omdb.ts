export interface FilmOmdb {
  imdbID: string;
  Title: string;
  Year: string;
  Type: 'movie' | 'series' | 'game';
  Poster: string;
}

export interface ReponseRecherche {
  Search?: FilmOmdb[];
  totalResults?: string;
  Response: 'True' | 'False';
  Error?: string;
}

export const creerUrlFilm = (nomFilm: string) => {
  const cleApi = import.meta.env.VITE_OMDB_KEY;
  const titre = encodeURIComponent(nomFilm);
 
  return `https://www.omdbapi.com/?apikey=${cleApi}&s=${titre}`;
};
 