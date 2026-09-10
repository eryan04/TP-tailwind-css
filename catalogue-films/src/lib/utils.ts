export type StatutFilm = 'vu' | 'a_voir' | 'abandonne';

export interface Film {
  id: number;
  titre: string;
  annee: number;
  genres: string[];
  note: number;
  statut: StatutFilm;
}

export const FILMS: Film[] = [
  { id: 1, titre: 'Alien', annee: 1979, genres: ['SF', 'Horreur'], note: 8.5, statut: 'vu' },
  { id: 2, titre: 'Blade Runner', annee: 1982, genres: ['SF', 'Thriller'], note: 8.1, statut: 'vu' },
  { id: 3, titre: 'Arrival', annee: 2016, genres: ['SF', 'Drame'], note: 7.9, statut: 'a_voir' },
  { id: 4, titre: 'Dune', annee: 2021, genres: ['SF', 'Aventure'], note: 8.0, statut: 'a_voir' },
  { id: 5, titre: 'Solaris', annee: 1972, genres: ['SF', 'Drame'], note: 8.4, statut: 'abandonne' },
  { id: 6, titre: 'The Shining', annee: 1980, genres: ['Horreur', 'Thriller'], note: 8.4, statut: 'vu' },
];

export function trierPar<T>(liste: T[], cle: keyof T): T[] {
  return [...liste].sort((a, b) => {
    const gauche = a[cle];
    const droite = b[cle];

    if (typeof gauche === 'string' && typeof droite === 'string') {
      return gauche.localeCompare(droite);
    }

    if (typeof gauche === 'number' && typeof droite === 'number') {
      return gauche - droite;
    }

    return String(gauche).localeCompare(String(droite));
  });
}

export function filtrerParGenre(liste: Film[], genre: string): Film[] {
  return liste.filter((film) => film.genres.includes(genre));
}

