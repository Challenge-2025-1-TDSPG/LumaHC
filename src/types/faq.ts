/**
 * Estrutura de dados para itens do FAQ
 * Usado para questões e respostas da página de perguntas frequentes
 */
export type FaqData = {
  /** Pergunta do usuário */
  question: string;
  /** Resposta da equipe */
  answer: string;
  /** Link opcional para mais informações */
  link?: string;
};
