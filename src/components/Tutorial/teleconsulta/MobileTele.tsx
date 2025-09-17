import { MOBILE_TELECONSULT_STEPS } from '@/constants/tutorialSteps';
import BtnStore from '../../Botao/BtnStore';
import TutorialSection from '../shared/TutorialSection';

/**
 * Componente para tutorial de teleconsulta em dispositivos móveis
 * Usa o TutorialSection unificado com botão de store customizado
 */
export default function MobileTele() {
  return (
    <TutorialSection
      title='Usar pelo Celular'
      description='Para uma experiência mais completa, recomendamos usar o app do Portal do Paciente HC.'
      customActionButton={<BtnStore />}
      tutorialTitle='Como usar no App'
      steps={MOBILE_TELECONSULT_STEPS}
      className='gap-4' // Mobile usa gap menor que desktop
    />
  );
}
