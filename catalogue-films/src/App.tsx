import { useState } from 'react';
import { FormulaireInscription } from './composants/FormulaireInscription';
import { ListeInscriptions } from './composants/ListeInscriptions';
import type {
  Inscription,
  InscriptionEnregistree,
} from './lib/inscription';

export type { InscriptionEnregistree } from './lib/inscription';

function App() {
  const [inscriptions, setInscriptions] = useState<InscriptionEnregistree[]>([]);

  const ajouterInscription = (donnees: Inscription) => {
    const nouvelleInscription: InscriptionEnregistree = {
      id: Date.now(),
      prenom: donnees.prenom.trim(),
      email: donnees.email.trim(),
      cgv: donnees.cgv,
    };

    setInscriptions((liste) => [nouvelleInscription, ...liste]);
  };

  const supprimerInscription = (id: number) => {
    setInscriptions((liste) => liste.filter((inscription) => inscription.id !== id));
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800 md:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            TP3 · React & TypeScript
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Formulaire d'inscription
          </h1>
          <p className="max-w-2xl text-slate-600">
            Remplissez le formulaire pour ajouter une inscription validée à la liste.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start">
          <FormulaireInscription onInscription={ajouterInscription} />

          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Inscriptions validées</h2>
              <p className="mt-1 text-sm text-slate-500">
                Les mots de passe ne sont jamais conservés.
              </p>
            </div>
            <ListeInscriptions
              inscriptions={inscriptions}
              onSuppression={supprimerInscription}
            />
          </section>
        </div>

      </div>
    </main>
  );
}

export default App;
