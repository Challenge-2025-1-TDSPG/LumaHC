import { DESKTOP_SIGNUP_STEPS } from '@/data/tutorialStepsData';
import TutorialSection from '../Tutorial/shared/TutorialSection';

/**
 * Tutorial de cadastro para desktop/navegador
 * Exibe passos para cadastro via site com link direto
 */
export default function DeskCadastro() {
  return (
    <TutorialSection
      title='Acesse pelo Navegador'
      description='Você também pode fazer seu cadastro diretamente pelo site, sem instalar nada.'
      actionButton={{
        href: 'https://portaldopaciente.hc.fm.usp.br/',
        label: 'Acessar Site',
        external: true,
      }}
      tutorialTitle='Como fazer o cadastro no navegador'
      steps={DESKTOP_SIGNUP_STEPS}
      className='lista-passos-desk'
    />
  );
}
