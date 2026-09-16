import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CarteFilm } from './CarteFilm';
import {
	urlRecherche,
	type FilmOmdb,
	type ReponseRecherche,
} from '../lib/omdb';

export function RechercheFilms() {
	const [terme, setTerme] = useState('');
	const [films, setFilms] = useState<FilmOmdb[]>([]);
	const [chargement, setChargement] = useState(false);
	const [erreur, setErreur] = useState<string | null>(null);

	useEffect(() => {
		const controleur = new AbortController();

		const rechercher = async () => {
			const termeNettoye = terme.trim();

			if (!termeNettoye) {
				setFilms([]);
				setErreur(null);
				setChargement(false);
				return;
			}

			setChargement(true);
			setErreur(null);

			try {
				const reponse = await fetch(urlRecherche(termeNettoye), {
					signal: controleur.signal,
				});

				if (!reponse.ok) {
					throw new Error(`Erreur HTTP ${reponse.status}`);
				}

				const donnees: ReponseRecherche = await reponse.json();

				if (donnees.Response !== 'True') {
					throw new Error(donnees.Error ?? 'La recherche a échoué.');
				}

				setFilms(donnees.Search ?? []);
				setChargement(false);
			} catch (e: unknown) {
				if (e instanceof Error && e.name === 'AbortError') {
					return;
				}

				setFilms([]);
				setErreur(e instanceof Error ? e.message : 'Erreur inconnue');
				setChargement(false);
			}
		};

		void rechercher();

		return () => controleur.abort();
	}, [terme]);

	return (
		<section className="space-y-6">
			<div className="space-y-2">
				<label htmlFor="recherche-film" className="block text-sm font-semibold text-slate-700">
					Rechercher un film
				</label>
				<input
					id="recherche-film"
					type="search"
					value={terme}
					onChange={(e) => setTerme(e.target.value)}
					placeholder="Ex. Alien"
					className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
				/>
			</div>

			{!terme.trim() ? (
				<p className="text-slate-600">Tapez un titre pour lancer la recherche.</p>
			) : null}

			{terme.trim() && chargement ? <p className="text-slate-600">Chargement…</p> : null}

			{terme.trim() && !chargement && erreur ? (
				<p className="text-red-600">{erreur}</p>
			) : null}

			{terme.trim() && !chargement && !erreur && films.length === 0 ? (
				<p className="text-slate-600">Aucun film ne correspond à « {terme.trim()} ».</p>
			) : null}

			{terme.trim() && !chargement && !erreur && films.length > 0 ? (
				<ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
					{films.map((film) => (
						<li key={film.imdbID}>
							<Link to={`/films/${film.imdbID}`} className="block h-full">
								<CarteFilm film={film} />
							</Link>
						</li>
					))}
				</ul>
			) : null}
		</section>
	);
}
