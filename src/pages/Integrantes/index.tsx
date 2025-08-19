import MemberCard from '../../components/Integrantes/MemberCard.tsx';
import { members } from '../../components/Integrantes/members.ts';

export default function Integrantes() {
  return (
    <main>
      <ul>
        {members.map((m) => (
          <MemberCard key={m.rm} m={m} />
        ))}
      </ul>
    </main>
  );
}
