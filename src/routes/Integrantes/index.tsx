import { members } from '@/data/membersData';
import CarrosselIntegrantes from '@components/integrantes/CarrosselIntegrantes';

/**
 * Página dos integrantes da equipe
 * Exibe carrossel com informações de todos os membros
 */
export default function Integrantes() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <CarrosselIntegrantes members={members} autoMs={8000} showControls showIndicators />
    </main>
  );
}
