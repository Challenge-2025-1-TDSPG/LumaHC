import type { Membro } from '@/types/membro'
import MembroCard from './MembroCard'

type MembersListProps = { membros: Membro[] }

export default function MembrosList({ membros }: MembersListProps) {
  return (
    <ul className="list-none p-0 m-0 mx-auto max-w-[1000px] w-full flex flex-col items-center gap-6">
      {membros.map((m) => (
        <MembroCard key={m.rm} m={m} />
      ))}
    </ul>
  )
}
