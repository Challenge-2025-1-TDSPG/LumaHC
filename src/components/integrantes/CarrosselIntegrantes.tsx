import type { Membro } from '@/types/membro';
import type { CarouselOptions } from '@/types/navigation';
import MembroCard from './MembroCard';
import CarrosselBase from '../Carrossel/CarrosselBase';

export interface CarrosselIntegrantesProps extends CarouselOptions {
  membros: Membro[];
  title?: string;
  mostrarControles?: boolean; //* mostrar botões ‹ ›
  mostrarIndicadores?: boolean; //* bolinhas
  className?: string;
}

export default function CarrosselIntegrantes({
  membros,
  title,
  autoMs = 8000,
  mostrarControles = true,
  mostrarIndicadores = true,
  className,
}: CarrosselIntegrantesProps) {
  if (!membros.length) return null;

  return (
    <section aria-label={title} className={className}>
      {title && <h2>{title}</h2>}

      <CarrosselBase
        total={membros.length}
        autoMs={autoMs}
        showControls={mostrarControles}
        showIndicators={mostrarIndicadores}
        renderItem={(i) => (
          <ul className='list-none p-0 m-0'>
            <MembroCard m={membros[i]} />
          </ul>
        )}
      />
    </section>
  );
}
