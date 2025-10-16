import { FaMobileScreen } from 'react-icons/fa6';
import { IoPerson, IoPeopleSharp } from 'react-icons/io5';
import type { HomeCard } from '@/types/navigation';

export const HOME_CARDS: HomeCard[] = [
  {
    label: 'Auxílio Teleconsulta',
    href: '/auxilio/teleconsulta',
    Icon: FaMobileScreen,
    title: 'Auxílio Teleconsulta',
    description: 'Veja como acessar sua consulta online.',
  },
  {
    label: 'Auxílio Cadastro',
    href: '/auxilio/cadastro',
    Icon: IoPerson,
    title: 'Auxílio Cadastro',
    description: 'Ajuda para se cadastrar no Portal do Paciente.',
  },
  {
    label: 'Integrantes',
    href: '/integrantes',
    Icon: IoPeopleSharp,
    title: 'Conheça os Integrantes',
    description: 'Veja quem são os alunos desenvolvedores.',
  },
];
