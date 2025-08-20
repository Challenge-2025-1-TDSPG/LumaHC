import MainMenu from './MainMenu';
import user from '../../img/avatares/user.png';
export default function Header() {
  return (
    <header className='relative w-full h-auto bg-gradient' >
      <nav className='nav-bar'>
        <div className='profile'>
          <img src={user} alt='Imagem de um Avatar' className='w-20 h-20 rounded-full object-cover shadow-[0_4px_12px_rgba(0,0,0,.5)] '/>
          <h2>Olá, Usuário!</h2>
          <p>Vamos te ajudar</p>
        </div>
        <MainMenu />
      </nav>
    </header>
  );
}
