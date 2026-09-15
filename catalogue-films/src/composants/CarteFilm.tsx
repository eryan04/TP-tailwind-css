import { Badge } from './Badge';
import { Carte } from './Carte';
import type { FilmOmdb } from '../lib/omdb';

export interface CarteFilmProps {
	film: FilmOmdb;
}

const libellesParType: Record<FilmOmdb['Type'], string> = {
	movie: 'Film',
	series: 'Série',
	game: 'Jeu',
};

export function CarteFilm({ film }: CarteFilmProps) {
	return (
		<Carte titre={film.Title} sousTitre={film.Year}>
			<div className="space-y-4">
				{film.Poster === 'N/A' ? (
					<div className="flex aspect-[2/3] items-center justify-center rounded-lg bg-slate-200 text-center text-sm text-slate-500">
						Pas d'affiche
					</div>
				) : (
					<img
						src={film.Poster}
						alt={`Affiche de ${film.Title}`}
						className="aspect-[2/3] w-full rounded-lg object-cover"
					/>
				)}
				<Badge texte={libellesParType[film.Type]} ton="info" />
			</div>
		</Carte>
	);
}
