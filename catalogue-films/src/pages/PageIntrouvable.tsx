import { Link } from 'react-router-dom';

export function PageIntrouvable() {
  return (
    <section className="space-y-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Erreur 404</p>
      <h1 className="text-3xl font-bold text-slate-900">Page introuvable</h1>
      <p className="text-slate-600">Cette page n'existe pas.</p>
      <Link to="/" className="inline-block text-blue-600 hover:underline">Retour a l'accueil</Link>
    </section>
  );
}