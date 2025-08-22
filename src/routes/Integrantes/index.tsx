import { membros } from "@/data/membrosDados.ts";
import MembersList from "./components/MembrosList.tsx";


export default function Integrantes() {
  return (
    <main>
      <h1 className="sr-only">Integrantes</h1>
      <MembersList membros={membros} />
    </main>
  );
}
