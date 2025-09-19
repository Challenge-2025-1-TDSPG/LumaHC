import { DESKTOP_TELECONSULT_STEPS } from '@/constants/tutorialSteps';
import TutorialSection from '../shared/TutorialSection';

/**
 * Tutorial de teleconsulta para desktop/navegador
 * Exibe passos para teleconsulta via site com link direto
 */
export default function DeskTele() {
  return (
    <TutorialSection
      title='Acesse pelo Navegador'
      description='Você também pode acessar diretamente pelo site, sem instalar nada.'
      actionButton={{
        href: 'https://portaldopaciente.hc.fm.usp.br/',
        label: 'Acessar Site',
        external: true,
      }}
      tutorialTitle='Como usar no Navegador'
      steps={DESKTOP_TELECONSULT_STEPS}
      className='lista-passos-desk'
    />
  );
}
