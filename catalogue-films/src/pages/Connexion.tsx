export function Connexion() {
  return (
    <section className="mx-auto max-w-md space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Connexion</h1>
        <p className="mt-2 text-slate-600">Retrouvez votre catalogue personnel.</p>
      </header>
      <form className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="block space-y-2 text-sm font-semibold text-slate-700">
          Email
          <input type="email" className="w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
        </label>
        <label className="block space-y-2 text-sm font-semibold text-slate-700">
          Mot de passe
          <input type="password" className="w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
        </label>
        <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
          Se connecter
        </button>
      </form>
    </section>
  );
}