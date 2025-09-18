import type { CarouselOptions } from '@/types/navigation';
import type { TutorialStepData } from '@/types/tutorialStep';
import type { ReactNode } from 'react';
import BtnExterno from '../../Button/BtnExterno';
import BtnInterno from '../../Button/BtnInterno';
import TutorialCarousel from './TutorialCarousel';

interface TutorialSectionProps {
  /** Título principal da seção */
  title: string;
  /** Descrição da seção */
  description: string;
  /** Botão de ação flexível (para desktop) */
  actionButton?: {
    href: string;
    label: string;
    external?: boolean;
  };
  /** Componente de botão customizado (para mobile - ex: BtnStore) */
  customActionButton?: ReactNode;
  /** Título do tutorial/carrossel */
  tutorialTitle: string;
  /** Array de passos do tutorial */
  steps: TutorialStepData[];
  /** Opções do carrossel (autoplay, etc.) */
  carouselOptions?: CarouselOptions;
  /** Classes CSS adicionais para o container */
  className?: string;
  /** Classes CSS para o conteúdo do carrossel */
  contentClassName?: string;
  /** Classes CSS para as imagens do carrossel */
  imgClassName?: string;
}

/**
 * Componente unificado para seções de tutorial
 * Suporta tanto desktop (actionButton) quanto mobile (customActionButton)
 *
 * @example
 * // Desktop com botão externo
 * <TutorialSection
 *   title="Acesse pelo Navegador"
 *   description="Tutorial desktop"
 *   actionButton={{ href: "https://...", label: "Acessar", external: true }}
 *   tutorialTitle="Como usar"
 *   steps={TUTORIAL_STEPS}
 * />
 *
 * @example
 * // Mobile com botão customizado
 * <TutorialSection
 *   title="Baixe o App"
 *   description="Tutorial mobile"
 *   customActionButton={<BtnStore />}
 *   tutorialTitle="Como usar no App"
 *   steps={MOBILE_STEPS}
 * />
 */

export default function TutorialSection({
  title,
  description,
  actionButton,
  customActionButton,
  tutorialTitle,
  steps,
  carouselOptions = { autoMs: 0 },
  className = '',
  contentClassName = 'max-w-[420px] md:max-w-[520px] mx-auto',
  imgClassName = 'max-h-[420px]',
}: TutorialSectionProps) {
  return (
    <section
      className={`flex flex-col p-5 text-center items-center justify-center font-bold ${className?.includes('gap-') ? className : `gap-6 ${className}`}`}
    >
      <div className='intro flex flex-col items-center text-center gap-3'>
        <h2>{title}</h2>
        <p>{description}</p>
        {customActionButton && customActionButton}
        {!customActionButton &&
          actionButton &&
          (actionButton.external ? (
            <BtnExterno href={actionButton.href} className='p-2'>
              {actionButton.label}
            </BtnExterno>
          ) : (
            <BtnInterno to={actionButton.href} className='p-2'>
              {actionButton.label}
            </BtnInterno>
          ))}
      </div>
      <TutorialCarousel
        title={tutorialTitle}
        steps={steps}
        autoMs={carouselOptions.autoMs}
        contentClassName={contentClassName}
        imgClassName={imgClassName}
      />
    </section>
  );
}
