import { NavLink, Outlet } from 'react-router-dom';

const lienNavigation = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'font-bold text-blue-600' : 'text-slate-600 hover:text-blue-600';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <NavLink to="/" className="text-lg font-bold text-slate-900">
            Catalogue de films
          </NavLink>
          <nav aria-label="Navigation principale" className="flex gap-5 text-sm">
            <NavLink to="/" end className={lienNavigation}>Accueil</NavLink>
            <NavLink to="/recherche" className={lienNavigation}>Recherche</NavLink>
            <NavLink to="/connexion" className={lienNavigation}>Connexion</NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-5 text-center text-sm text-slate-500">
        Catalogue de films - donnees fournies par OMDB
      </footer>
    </div>
  );
}