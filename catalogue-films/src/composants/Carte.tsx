import type { ReactNode } from 'react';

export interface CarteProps {
  titre: string;
  sousTitre?: string;
  children: ReactNode;
  actions?: ReactNode;
}

export function Carte({ titre, sousTitre, children, actions }: CarteProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-slate-900">{titre}</h3>
        {sousTitre ? <p className="text-sm text-slate-500">{sousTitre}</p> : null}
      </div>

      <div className="mt-4 flex-1">{children}</div>

      {actions ? <div className="mt-5 border-t border-slate-200 pt-4">{actions}</div> : null}
    </article>
  );
}
