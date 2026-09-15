import { RechercheFilms } from './composants/RechercheFilm';

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800 md:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Catalogue de films
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Rechercher un film
          </h1>
          <p className="max-w-2xl text-slate-600">
            Trouvez un film, une série ou un jeu dans la base OMDB.
          </p>
        </header>

        <RechercheFilms />
      </div>
    </main>
  );
}

export default App;
