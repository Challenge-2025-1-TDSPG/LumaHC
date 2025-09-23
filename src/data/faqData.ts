import type { FaqData } from '@/types/faq';

export const faqData: FaqData[] = [
  {
    question: 'Como funciona a teleconsulta?',
    answer:
      'Você será atendido por um especialista por vídeo, usando seu celular ou computador, no horário agendado.',
  },
  {
    question: 'Preciso instalar algum aplicativo?',
    answer:
      'O uso do aplicativo Portal do Paciente HC não é obrigatório em todos os casos, mas é altamente recomendado. Com ele, você pode acessar facilmente os agendamentos, links para a teleconsulta e receber notificações importantes.',
  },
  {
    question: 'E se eu não souber usar o celular?',
    answer:
      'Você pode receber ajuda de um familiar. Também oferecemos vídeos e suporte técnico para facilitar seu acesso.',
    link: 'https://www.youtube.com/watch?v=rT9U8HlXaRw',
  },
  {
    question: 'Minhas informações estão seguras?',
    answer:
      'Sim, seguimos protocolos rigorosos de segurança e privacidade, conforme as diretrizes do Ministério da Saúde.',
  },
  {
    question: 'Quem posso procurar em caso de dúvidas?',
    answer:
      'Você pode entrar em contato com a equipe de apoio da unidade do IMREA que acompanha seu tratamento.',
  },
];
