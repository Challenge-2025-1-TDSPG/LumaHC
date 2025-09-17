import AcessosSection from '@/components/Home/AcessosSection';
import BoasVindasSection from '@/components/Home/BoasVindasSection';

/**
 * Página inicial da aplicação
 * Exibe boas-vindas e seção de acessos rápidos
 */
export default function Home() {
  return (
    <main className='conteudo'>
      <BoasVindasSection />
      <AcessosSection />
    </main>
  );
}
