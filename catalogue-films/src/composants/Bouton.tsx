export type VarianteBouton = 'primaire' | 'secondaire' | 'danger';
export type TypeBouton = 'button' | 'submit';
export interface BoutonProps {
  libelle: string;
  variante?: VarianteBouton;
  desactive?: boolean;
  onClick?: () => void;
  type?: TypeBouton;
}

const stylesParVariante: Record<VarianteBouton, string> = {
  primaire:
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2',
  secondaire:
    'bg-slate-200 text-slate-800 hover:bg-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2',
  danger:
    'bg-red-600 text-white hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2',
};

export function Bouton({
  libelle,
  variante = 'primaire',
  desactive = false,
  onClick,
  type = 'button',
}: BoutonProps) {
  return (
    <button
      type={type}
      disabled={desactive}
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
        stylesParVariante[variante],
        desactive ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
      ].join(' ')}
    >
      {libelle}
    </button>
  );
}
