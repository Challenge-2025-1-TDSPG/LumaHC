export type HomeCard = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  href: string;
};

export const HOME_CARDS: HomeCard[] = [
 {
    imgSrc: '../../img/avatares/celular.png',
    imgAlt: 'Ícone de um celular',
    title: 'Auxílio Teleconsulta',
    description: 'Veja como acessar sua consulta online.',
    href: '/teleconsulta',
  },
  {
    imgSrc: '../../img/avatares/pessoa.png',
    imgAlt: 'Imagem de uma Pessoa',
    title: 'Auxílio Cadastro',
    description: 'Ajuda para se cadastrar no Portal do Paciente.',
    href: '/cadastro',
  },
  {
    imgSrc: '../../img/avatares/users.png',
    imgAlt: 'Imagem de duas pessoas',
    title: 'Conheça os Integrantes',
    description: 'Veja quem são os alunos desenvolvedores.',
    href: '/integrantes',
  },
];
