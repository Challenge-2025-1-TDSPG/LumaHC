import { Alex, Kelson, Lucas } from '../../../components/data/imagens';

export type Membro = {
  nome: string;
  rm: string;
  img: string;      
  descricao: string;
  linkedin?: string;
  github?: string;
};

export const MEMBROS: Membro[] = [
  {
    nome: 'Alexander Dennis Isidro Mamani',
    rm: 'RM 565554',
    img: Alex,
    linkedin: 'https://www.linkedin.com/in/alexander-dennis-a3b48824b/',
    github: 'https://github.com/alex-isidro',
    descricao:
      'Sou um jovem dedicado, com perfil analítico e criativo, em constante busca por crescimento pessoal e profissional...',
  },
  {
    nome: 'Kelson Zhang',
    rm: 'RM 563748',
    img: Kelson,
    linkedin: 'https://www.linkedin.com/in/kelson-zhang-211456323/',
    github: 'https://github.com/KelsonZh0',
    descricao:
      'Transição da gastronomia para a tecnologia. Hoje curso TADS na FIAP e me especializo em desenvolvimento web...',
  },
  {
    nome: 'Lucas Rossoni Dieder',
    rm: 'RM 563770',
    img: Lucas,
    linkedin: 'https://www.linkedin.com/in/lucas-rossoni-dieder-32242a353/',
    github: 'https://github.com/PxS00',
    descricao:
      'Gaúcho, 19 anos, estudante de ADS na FIAP. Interesse em IA, web e soluções com impacto real...',
  },
];

