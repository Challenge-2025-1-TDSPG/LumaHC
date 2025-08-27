import type { Passo } from '@/types/passo';
import PassoAPasso from './PassoAPasso';
import CarrosselBase from '../Carrossel/CarrosselBase';

export interface ListaPassosCarrosselProps {
  passos: Passo[];
  title?: string;
  autoMs?: number;
  className?: string;
  contentClassName?: string; // NOVO: wrapper do conteúdo do slide
  imgClassName?: string; // NOVO: classe aplicada na <img> do PassoView
}

export default function CarrosselPassos({
  passos,
  title,
  className,
  contentClassName,
  imgClassName,
}: ListaPassosCarrosselProps) {
  if (!passos.length) return null;

  return (
    <section aria-label={title} className={className}>
      {title && <h2>{title}</h2>}
      <CarrosselBase
        total={passos.length}
        renderItem={(i) => (
          <div className={`w-full ${contentClassName ?? ''}`}>
            <ul className='list-none p-0 m-0'>
              <PassoAPasso passo={passos[i]} numeracao={i} imgClassName={imgClassName} />
            </ul>
          </div>
        )}
      />
    </section>
  );
}
