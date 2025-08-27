// src/pages/AuxilioCadastro.tsx
import IntroCadastro from '@/components/cadastro/IntroCadastro';
import MobileCadastro from '@/components/cadastro/MobileCadastro';
import DeskCadastro from '@/components/cadastro/DeskCadastro';
import EscolhaModoTabs from '@/components/EscolhaModoTabs/EscolhaModoTabs';

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
