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

export function construireUrlRecherche(terme: string): string {
  return `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_KEY}&s=${encodeURIComponent(terme)}`;
}