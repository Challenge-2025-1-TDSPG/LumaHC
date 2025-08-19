export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="profile">
          //*TODO: adicionar avatar quando assets estiverem no public
          {/* <img src="/assets/img/geral/avatar.png" alt="Imagem de um Avatar" /> */}
          <h2>Olá, Usuário!</h2>
          <p>Vamos te ajudar</p>
        </div>
        <ul>
          //*TODO: migrar navegação para React Router 
          {/* <li><a href="/assets/auxilio/teleconsulta.html">Auxílio Teleconsulta</a></li>
          <li><a href="/assets/auxilio/cadastro.html">Auxílio Cadastro</a></li>
          <li><a href="/assets/integrantes/integrantes.html">Integrantes</a></li>
          <li><a href="/assets/contato/contato.html">Contato</a></li>
          <li><a href="/assets/faq/faq.html">FAQ</a></li> */}
        </ul>
      </nav>
    </header>
  )
}
