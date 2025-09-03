// src/pages/AuxilioCadastro.tsx
import EscolhaModoTabs from '@/components/EscolhaModoTabs/EscolhaModoTabs';
import DeskCadastro from '@/components/Tutorial/cadastro/DeskCadastro';
import IntroCadastro from '@/components/Tutorial/cadastro/IntroCadastro';
import MobileCadastro from '@/components/Tutorial/cadastro/MobileCadastro';

export default function AuxilioCadastro() {
  return (
    <main className='flex flex-col justify-center items-center p-5 gap-5'>
      <IntroCadastro />

      <EscolhaModoTabs
        defaultMode='app'
        labelApp='Usar App'
        labelNav='Usar Navegador'
        app={<MobileCadastro />}
        nav={<DeskCadastro />}
        className='w-full'
      />
    </main>
  );
}
