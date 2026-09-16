import { RechercheFilms } from '../composants/RechercheFilm';

export function Recherche() {
  return (
    <section className="space-y-3">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Rechercher un film</h1>
        <p className="mt-2 text-slate-600">Trouvez un film, une serie ou un jeu dans la base OMDB.</p>
      </header>
      <RechercheFilms />
    </section>
  );
}