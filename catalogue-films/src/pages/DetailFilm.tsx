import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { urlDetail, type FilmDetailOmdb } from '../lib/omdb';

export function DetailFilm() {
  const { id } = useParams();
  const { donnees, chargement, erreur } = useFetch<FilmDetailOmdb>(id ? urlDetail(id) : null);

  if (chargement) {
    return <p className="text-slate-600">Chargement du film…</p>;
  }

  if (erreur) {
    return <p className="text-red-600">Erreur : {erreur}</p>;
  }

  if (!donnees || donnees.Response === 'False') {
    return (
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Film introuvable</h1>
        <p className="text-slate-600">{donnees?.Error ?? 'Aucun film ne correspond à cet identifiant.'}</p>
        <Link to="/recherche" className="inline-block text-blue-600 hover:underline">
          Retour à la recherche
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <Link to="/recherche" className="inline-block text-blue-600 hover:underline">
        Retour à la recherche
      </Link>
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Film</p>
        <h1 className="text-3xl font-bold text-slate-900">{donnees.Title}</h1>
        <p className="text-slate-600">{donnees.Year} · {donnees.Genre} · {donnees.Runtime}</p>
      </div>
      <article className="max-w-3xl space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Synopsis</h2>
        <p className="leading-7 text-slate-700">{donnees.Plot}</p>
      </article>
    </section>
  );
}