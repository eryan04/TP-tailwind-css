import { Badge } from './Badge';
import { Bouton } from './Bouton';
import { Carte } from './Carte';
import type { Film, StatutFilm } from '../lib/utils';

export interface ListeFilmsProps {
  films: Film[];
  messageVide?: string;
  onSelection?: (film: Film) => void;
}

const libellesParStatut: Record<StatutFilm, string> = {
  vu: 'Déjà vu',
  a_voir: 'À voir',
  abandonne: 'Abandonné',
};

const tonsParStatut: Record<StatutFilm, 'neutre' | 'succes' | 'info' | 'attention'> = {
  vu: 'succes',
  a_voir: 'info',
  abandonne: 'neutre',
};

export function ListeFilms({ films, messageVide = 'Aucun film disponible.', onSelection }: ListeFilmsProps) {
  if (films.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-200/80 px-6 py-12 text-center text-slate-600">
        {messageVide}
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {films.map((film) => (
        <li key={film.id} className="list-none">
          <Carte
            titre={film.titre}
            sousTitre={`${film.annee} — ${film.note}/10`}
            actions={
              onSelection ? (
                <Bouton libelle="Détails" variante="secondaire" onClick={() => onSelection(film)} />
              ) : undefined
            }
          >
            <div className="flex flex-wrap gap-2">
              <Badge texte={libellesParStatut[film.statut]} ton={tonsParStatut[film.statut]} />
              {film.genres.map((genre) => (
                <Badge key={`${film.id}-${genre}`} texte={genre} ton="neutre" />
              ))}
            </div>
          </Carte>
        </li>
      ))}
    </ul>
  );
}
