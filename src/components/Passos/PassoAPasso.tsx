import type { Passo } from '@/types/passo';

// PassoAPasso.tsx (ou o arquivo do PassoView)
type PassoViewProps = {
  passo: Passo; // { img: string; alt: string; /* titulo?: string */ }
  numeracao: number;
  imgClassName?: string;
};

export default function PassoView({ passo, numeracao, imgClassName }: PassoViewProps) {
  const titulo = passo.titulo ?? passo.alt; // sem 'any'

  return (
    <li aria-label={`Passo ${numeracao + 1}: ${titulo}`}>
      <h4 className='mt-2 font-semibold text-fontTertiary'>
        {numeracao + 1}. {titulo}
      </h4>
      <img
        src={passo.img}
        alt={passo.alt}
        className={`w-full h-auto object-contain rounded-xl ${imgClassName ?? ''}`}
      />
    </li>
  );
}
