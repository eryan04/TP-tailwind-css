export interface Inscription {
  prenom: string;
  email: string;
  motDePasse: string;
  confirmation: string;
  cgv: boolean;
}

export type InscriptionEnregistree = Omit<Inscription, 'motDePasse' | 'confirmation'> & {
  id: number;
};

export const valeursInitiales: Inscription = {
  prenom: '',
  email: '',
  motDePasse: '',
  confirmation: '',
  cgv: false,
};

export type Erreurs = Partial<Record<keyof Inscription, string>>;

export function valider(donnees: Inscription): Erreurs {
  const erreurs: Erreurs = {};

  if (donnees.prenom.trim().length < 2) {
    erreurs.prenom = 'Le prénom doit contenir au moins 2 caractères.';
  }

  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donnees.email.trim());
  if (!emailValide) {
    erreurs.email = 'L’email doit être de la forme xxx@yyy.zz.';
  }

  if (donnees.motDePasse.length < 8) {
    erreurs.motDePasse = 'Le mot de passe doit contenir au moins 8 caractères.';
  }

  if (donnees.confirmation !== donnees.motDePasse) {
    erreurs.confirmation = 'La confirmation doit être identique au mot de passe.';
  }

  if (!donnees.cgv) {
    erreurs.cgv = 'Vous devez accepter les conditions générales de vente.';
  }

  return erreurs;
}

