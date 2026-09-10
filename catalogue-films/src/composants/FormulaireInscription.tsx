import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Bouton } from './Bouton';
import { ChampTexte } from './ChampTexte';
import {
  valider,
  valeursInitiales,
  type Erreurs,
  type Inscription,
} from '../lib/inscription';

export interface FormulaireInscriptionProps {
  onInscription: (donnees: Inscription) => void;
}

export function FormulaireInscription({ onInscription }: FormulaireInscriptionProps) {
  const [donnees, setDonnees] = useState<Inscription>(valeursInitiales);
  const [erreurs, setErreurs] = useState<Erreurs>({});
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  const gererSaisie = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const valeur = type === 'checkbox' ? checked : value;

    setDonnees((donneesActuelles) => ({
      ...donneesActuelles,
      [name]: valeur,
    }));
  };

  const gererEnvoi = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const erreursTrouvees = valider(donnees);
    setErreurs(erreursTrouvees);

    if (Object.keys(erreursTrouvees).length > 0) return;

    setEnvoiEnCours(true);
    window.setTimeout(() => {
      onInscription(donnees);
      setDonnees(valeursInitiales);
      setErreurs({});
      setEnvoiEnCours(false);
    }, 500);
  };

  return (
    <form
      noValidate
      onSubmit={gererEnvoi}
      className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Créer une inscription</h2>
        <p className="mt-1 text-sm text-slate-500">Tous les champs sont obligatoires.</p>
      </div>

      <ChampTexte
        nom="prenom"
        label="Prénom"
        valeur={donnees.prenom}
        onChange={gererSaisie}
        erreur={erreurs.prenom}
        placeholder="Votre prénom"
      />
      <ChampTexte
        nom="email"
        label="Email"
        type="email"
        valeur={donnees.email}
        onChange={gererSaisie}
        erreur={erreurs.email}
        placeholder="vous@exemple.fr"
      />
      <ChampTexte
        nom="motDePasse"
        label="Mot de passe"
        type="password"
        valeur={donnees.motDePasse}
        onChange={gererSaisie}
        erreur={erreurs.motDePasse}
      />
      <ChampTexte
        nom="confirmation"
        label="Confirmation du mot de passe"
        type="password"
        valeur={donnees.confirmation}
        onChange={gererSaisie}
        erreur={erreurs.confirmation}
      />

      <div className="space-y-2">
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input
            id="cgv"
            name="cgv"
            type="checkbox"
            checked={donnees.cgv}
            onChange={gererSaisie}
            aria-invalid={Boolean(erreurs.cgv)}
            aria-describedby={erreurs.cgv ? 'cgv-erreur' : undefined}
            className="mt-1 size-4 accent-blue-600"
          />
          <span>J'accepte les conditions générales de vente.</span>
        </label>
        {erreurs.cgv ? (
          <p id="cgv-erreur" className="text-sm text-red-600">
            {erreurs.cgv}
          </p>
        ) : null}
      </div>

      <Bouton
        libelle={envoiEnCours ? 'Envoi en cours…' : 'S’inscrire'}
        type="submit"
        desactive={envoiEnCours}
      />
    </form>
  );
}