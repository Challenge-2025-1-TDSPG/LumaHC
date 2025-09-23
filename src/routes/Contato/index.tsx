import ContatoList from '@/components/contato/ContatoList';
import { useEffect } from 'react';

/**
 * Página de contatos
 * Exibe informações de contato da instituição
 *
 * @example
 * // Uso em rotas (React Router)
 * <Route path="/contato" element={<Contato />} />
 */
export default function Contato() {
  useEffect(() => {
    document.title = 'Contatos';
  }, []);
  return (
    <main className='ml-0 p-5 w-full flex-1' aria-label='Conteúdo principal de contatos'>
      <div className='bg-backSecondary p-5 rounded-[10px] max-w-full m-auto shadow-[0_2px_6px_rgba(255,112,67,0.25)] box-border relative'>
        <h1 className='text-fontPrimary text-2xl mb-2.5 text-center'>Contatos</h1>
        <p className='text-base text-fontSecondary mb-5 text-center '>
          Este é um canal de diálogo entre a Instituição e o paciente, cuidador e família
        </p>
        {/* Lista de contatos da instituição */}
        <ContatoList />
      </div>
    </main>
  );
}
