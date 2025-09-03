import type { Passo } from '@/types/passo';
import type { CarouselOptions } from '@/types/navigation';
import BtnExterno from '../Botao/BtnExterno';
import BtnInterno from '../Botao/BtnInterno';
import TutorialCarousel from './TutorialCarousel';

// Interface específica para o componente interno
interface SectionWithIntroProps {
  title: string;
  description: string;
  actionButton?: {
    href: string;
    label: string;
    external?: boolean;
  };
  className?: string;
  children?: React.ReactNode;
}

// Componente interno - só usado aqui
function SectionWithIntro({
  title,
  description,
  actionButton,
  className = '',
  children,
}: SectionWithIntroProps) {
  return (
    <section className={`flex flex-col p-5 gap-6 text-center items-center justify-center font-bold ${className}`}>
      <div className='intro flex flex-col items-center text-center gap-3'>
        <h2>{title}</h2>
        <p>{description}</p>
        {actionButton && (
          actionButton.external ? (
            <BtnExterno href={actionButton.href} className='p-2'>
              {actionButton.label}
            </BtnExterno>
          ) : (
            <BtnInterno to={actionButton.href} className='p-2'>
              {actionButton.label}
            </BtnInterno>
          )
        )}
      </div>
      {children}
    </section>
  );
}

interface TutorialSectionProps {
  title: string;
  description: string;
  actionButton?: {
    href: string;
    label: string;
    external?: boolean;
  };
  tutorialTitle: string;
  passos: Passo[];
  carouselOptions?: CarouselOptions;
  className?: string;
  contentClassName?: string;
  imgClassName?: string;
}

export default function TutorialSection({
  title,
  description,
  actionButton,
  tutorialTitle,
  passos,
  carouselOptions = { autoMs: 0 },
  className = '',
  contentClassName = 'max-w-[420px] md:max-w-[520px] mx-auto',
  imgClassName = 'max-h-[420px]',
}: TutorialSectionProps) {
  return (
    <SectionWithIntro
      title={title}
      description={description}
      actionButton={actionButton}
      className={className}
    >
      <TutorialCarousel
        title={tutorialTitle}
        passos={passos}
        autoMs={carouselOptions.autoMs}
        contentClassName={contentClassName}
        imgClassName={imgClassName}
      />
    </SectionWithIntro>
  );
}
