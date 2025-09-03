import { TELE_DESK } from '@/data/passoAPasso';
import TutorialSection from '../shared/TutorialSection';

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
      passos={TELE_DESK}
      className='lista-passos-desk'
    />
  );
}
