import type { ChangeEvent } from 'react';

export interface ChampTexteProps {
  nom: string;
  label: string;
  valeur: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password';
  erreur?: string;
  placeholder?: string;
}

export function ChampTexte({
  nom,
  label,
  valeur,
  onChange,
  type = 'text',
  erreur,
  placeholder,
}: ChampTexteProps) {
  const idErreur = `${nom}-erreur`;

  return (
    <div className="space-y-2">
      <label htmlFor={nom} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={nom}
        name={nom}
        type={type}
        value={valeur}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(erreur)}
        aria-describedby={erreur ? idErreur : undefined}
        className={`w-full rounded-md border px-3 py-2 text-slate-900 outline-none transition focus:ring-2 ${
          erreur
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
            : 'border-slate-300 focus:border-blue-500 focus:ring-blue-200'
        }`}
      />
      {erreur ? (
        <p id={idErreur} className="text-sm text-red-600">
          {erreur}
        </p>
      ) : null}
    </div>
  );
}