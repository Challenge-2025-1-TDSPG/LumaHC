import { HEADER_MENU } from '@/config/navigation';
import BtnExterno from '../Button/BtnExterno';

import BtnLogout from '../Button/BtnLogout';
import BtnNav from '../Button/BtnNav';

export default function MainMenu() {
  const usuarioLogado =
    typeof window !== 'undefined' ? localStorage.getItem('usuarioLogado') : null;
  return (
    <ul role='menu' className='w-full flex flex-col gap-3 list-none m-0 py-2.5'>
      {HEADER_MENU.map((item) => (
        <li key={item.href} className='w-full'>
          {item.external ? (
            <BtnExterno href={item.href} className='block w-full text-left'>
              {item.label}
            </BtnExterno>
          ) : (
            <BtnNav to={item.href} className='block w-full text-left'>
              {item.label}
            </BtnNav>
          )}
        </li>
      ))}
      {usuarioLogado && (
        <li className='w-full'>
          <BtnLogout />
        </li>
      )}
    </ul>
  );
}
