import MembersList from "./components/MembemList";
import { MEMBROS } from "./data/members"; 

export default function Integrantes() {
  return (
    <main>
      <h1 className="sr-only">Integrantes</h1>
      <MembersList membros={MEMBROS} />
    </main>
  );
}
