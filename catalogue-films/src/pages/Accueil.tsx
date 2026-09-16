import { Link } from 'react-router-dom';

export function Accueil() {
  return (
    <section className="space-y-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        Catalogue de films
      </p>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        Trouvez votre prochain film.
      </h1>
      <p className="max-w-2xl text-lg text-slate-600">
        Recherchez des films, des series et des jeux dans la base OMDB.
      </p>
      <Link to="/recherche" className="inline-block rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
        Lancer une recherche
      </Link>
    </section>
  );
}