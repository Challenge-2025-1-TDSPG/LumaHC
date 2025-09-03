import EscolhaModoTabs from '@/components/EscolhaModoTabs/EscolhaModoTabs';
import DeskTele from '../../components/Tutorial/teleconsulta/DeskTele';
import IntroTele from '../../components/Tutorial/teleconsulta/Intro';
import MobileTele from '../../components/Tutorial/teleconsulta/MobileTele';

export default function AuxilioTeleconsulta() {
  return (
    <main className='flex flex-col justify-center items-center p-5 gap-5'>
      <IntroTele />

      <EscolhaModoTabs
        defaultMode='app'
        labelApp='Usar App'
        labelNav='Usar Navegador'
        app={<MobileTele />}
        nav={<DeskTele />}
        className='w-full'
      />
    </main>
  );
}
