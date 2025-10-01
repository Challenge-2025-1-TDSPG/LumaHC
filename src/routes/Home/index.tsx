import AcessosSection from '@/components/HomeComponents/AcessoSection';
import BoasVindasSection from '@/components/HomeComponents/BoasVindasSection';
import { useEffect } from 'react';

/**
 * Página inicial da aplicação
 * Exibe boas-vindas e seção de acessos rápidos
 *
 * @example
 * // Uso em rotas (React Router)
 * <Route path="/" element={<Home />} />
 */
export default function Home() {
  useEffect(() => {
    document.title = 'Início';
  }, []);

  return (
    <main className='conteudo' aria-label='Conteúdo principal da página inicial'>
      <BoasVindasSection />
      <AcessosSection />
    </main>
  );
}
