import { TELE_DESK } from '@/data/passoAPasso';
import BtnExterno from '../Botao/BtnExterno';
import CarrosselPassos from '../Passos/CarrosselPassos';

export default function DeskTele() {
  return (
    <section className='flex flex-col p-5 gap-6 text-center items-center justify-center font-bold '>
      <div className='intro flex flex-col items-center text-center gap-3'>
        <h2>Acesse pelo Navegador</h2>
        <p>Você também pode acessar diretamente pelo site, sem instalar nada.</p>
        <BtnExterno href='https://portaldopaciente.hc.fm.usp.br/' target='_blank' className='p-2'>
          Acessar Site
        </BtnExterno>
      </div>

      <CarrosselPassos
        title='Como usar no Navegador'
        passos={TELE_DESK}
        autoMs={0}
        className='lista-passos-desk'
        contentClassName='max-w-[420px] md:max-w-[520px] mx-auto'
        imgClassName='max-h-[420px]' // controla altura máxima da imagem
      />
    </section>
  );
}
