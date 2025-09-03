import type { TutorialStepData } from '@/types/tutorialStep';

// Props para um passo individual do tutorial
type TutorialStepProps = {
  step: TutorialStepData; // { img: string; alt: string; title?: string; description?: string }
  stepNumber: number;
  imgClassName?: string;
};

/**
 * Item individual de um passo do tutorial
 * Exibe número, título e imagem com numeração automática
 */
export default function TutorialStep({ step, stepNumber, imgClassName }: TutorialStepProps) {
  const title = step.title ?? step.alt; // sem 'any'

  return (
    <li aria-label={`Passo ${stepNumber + 1}: ${title}`}>
      <h4 className='mt-2 font-semibold text-fontTertiary'>
        {stepNumber + 1}. {title}
      </h4>
      <img
        src={step.img}
        alt={step.alt}
        className={`w-full h-auto object-contain rounded-xl ${imgClassName ?? ''}`}
      />
    </li>
  );
}
