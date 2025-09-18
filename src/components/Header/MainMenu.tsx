import BtnExterno from '../Botao/BtnExterno';
import BtnNav from '../Botao/BtnNav';
import { HEADER_MENU } from '../../data/navigationData';

type Props = { filter?: string };

function normalize(s: string) {
  return s
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, ''); // remove acentos
}

export default function MainMenu({ filter = '' }: Props) {
  const f = normalize(filter.trim());
  const items = f
    ? HEADER_MENU.filter(it => normalize(it.label).includes(f))
    : HEADER_MENU;

  if (items.length === 0) {
    return (
      <div className="text-white/80 text-sm italic px-2 py-3">
        Nenhum resultado para “{filter}”.
      </div>
    );
  }

  return (
    <ul role="menu" className="w-full max-w-full
        flex flex-col gap-3 list-none m-0 py-2.5
        overflow-x-hidden
        break-words
        [hyphens:auto]">
      {items.map(item => (
        <li key={item.href} className="w-full max-w-full">
          {item.external ? (
            <BtnExterno href={item.href} className="block w-full max-w-full text-left truncate">
              {item.label}
            </BtnExterno>
          ) : (
            <BtnNav to={item.href} className="block w-full max-w-full text-left truncate">
              {item.label}
            </BtnNav>
          )}
        </li>
      ))}
    </ul>
  );
}
