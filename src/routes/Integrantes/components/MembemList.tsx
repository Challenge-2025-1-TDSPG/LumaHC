import type { Membro } from "../data/members";

type MembersListProps = { membros: Membro[] };

export default function MembersList({ membros }: MembersListProps) {
  return (
    <ul>
      {membros.map((m) => (
        <li key={m.rm}>{m.nome}</li>
      ))}
    </ul>
  );
}