import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bouton } from '../composants/Bouton';
import { useAuth } from '../contextes/AuthContext';

export function Connexion() {
  const [pseudoSaisi, setPseudoSaisi] = useState('');
  const { connecter } = useAuth();
  const naviguer = useNavigate();

  const gererEnvoi = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pseudo = pseudoSaisi.trim();
    if (!pseudo) return;

    connecter(pseudo);
    naviguer('/');
  };

  return (
    <section className="mx-auto max-w-md space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Connexion</h1>
        <p className="mt-2 text-slate-600">Choisissez un pseudo pour continuer.</p>
      </header>
      <form onSubmit={gererEnvoi} className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="block space-y-2 text-sm font-semibold text-slate-700">
          Pseudo
          <input
            type="text"
            value={pseudoSaisi}
            onChange={(e) => setPseudoSaisi(e.target.value)}
            required
            className="w-full rounded-md border border-slate-300 px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </label>
        <Bouton libelle="Se connecter" type="submit" />
      </form>
    </section>
  );
}