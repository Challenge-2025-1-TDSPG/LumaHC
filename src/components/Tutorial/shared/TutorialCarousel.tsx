import type { Passo } from '@/types/passo';
import CarrosselBase from '../../Carrossel/CarrosselBase';
import TutorialStep from './TutorialStep';

export interface TutorialCarouselProps {
  passos: Passo[];
  title?: string;
  autoMs?: number;
  className?: string;
  contentClassName?: string; // wrapper do conteúdo do slide
  imgClassName?: string; // classe aplicada na <img> do TutorialStep
}

export default function TutorialCarousel({
  passos,
  title,
  autoMs,
  className,
  contentClassName,
  imgClassName,
}: TutorialCarouselProps) {
  if (!passos.length) return null;

  return (
    <section aria-label={title} className={className}>
      {title && <h2>{title}</h2>}
      <CarrosselBase
        total={passos.length}
        autoMs={autoMs}
        renderItem={(i) => (
          <div className={`w-full ${contentClassName ?? ''}`}>
            <ul className='list-none p-0 m-0'>
              <TutorialStep passo={passos[i]} numeracao={i} imgClassName={imgClassName} />
            </ul>
          </div>
        )}
      />
    </section>
  );
}
