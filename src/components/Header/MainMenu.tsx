import { HEADER_MENU } from '@/config/navigation';
import BtnExterno from '../Button/BtnExterno';
import BtnNav from '../Button/BtnNav';

export default function MainMenu() {
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
    </ul>
  );
}
