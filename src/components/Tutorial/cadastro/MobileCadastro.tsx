import { MOBILE_SIGNUP_STEPS } from '@/data/tutorialStepsData';
import BtnStore from '../../Botao/BtnStore';
import TutorialSection from '../shared/TutorialSection';

/**
 * Componente para tutorial de cadastro em dispositivos móveis
 * Usa o TutorialSection unificado com botão de store customizado
 */
export default function MobileCadastro() {
  return (
    <TutorialSection
      title='Baixe o App'
      description='Para uma experiência mais completa, recomendamos baixar o Portal do Paciente HC.'
      customActionButton={<BtnStore />}
      tutorialTitle='Como usar no App'
      steps={MOBILE_SIGNUP_STEPS}
      className='gap-4 lista-passos-mobile' // Mobile usa gap menor + classe específica
    />
  );
}
