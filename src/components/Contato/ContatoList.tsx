import ContatoItem from "./ContatoItem";
import { contatos } from "./contatos";

export default function ContatoList() {
  return (
    <div className="contato-section">
      {contatos.map((c, idx) => (
        <ContatoItem key={`${c.titulo}-${idx}`} item={c} />
      ))}
    </div>
  );
}
