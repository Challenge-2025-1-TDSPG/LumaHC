import ContatoItem from './ContatoItem';
import { contatos } from '../../data/contatos';

export default function ContatoList() {
  return (
    <div className='contato-section'>
      {contatos.map((c, idx) => (
        <ContatoItem key={`${c.title}-${idx}`} item={c} />
      ))}
    </div>
  );
}
