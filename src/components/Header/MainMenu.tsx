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
  <ul
    role="menu"
    className="
      w-full max-w-full
      flex flex-col lg:flex-row 
      gap-3 lg:gap-8             
      list-none m-0 py-2.5
      overflow-x-hidden
    "
  >
    {items.map(item => (
      <li key={item.href} role="none" className="w-full lg:w-auto">
        {item.external ? (
          <BtnExterno
            href={item.href}
            className="block w-full lg:w-auto text-left lg:text-center"
          >
            {item.label}
          </BtnExterno>
        ) : (
          <BtnNav
            to={item.href}
            className="block w-full lg:w-auto text-left lg:text-center"
          >
            {item.label}
          </BtnNav>
        )}
      </li>
    ))}
  </ul>
);
}
