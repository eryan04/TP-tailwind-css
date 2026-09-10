export type TonBadge = 'neutre' | 'succes' | 'info' | 'attention';

export interface BadgeProps {
  texte: string;
  ton?: TonBadge;
}

const stylesParTon: Record<TonBadge, string> = {
  neutre: 'bg-slate-200 text-slate-700',
  succes: 'bg-emerald-100 text-emerald-700',
  info: 'bg-sky-100 text-sky-700',
  attention: 'bg-amber-100 text-amber-700',
};

export function Badge({ texte, ton = 'neutre' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${stylesParTon[ton]}`}>
      {texte}
    </span>
  );
}
