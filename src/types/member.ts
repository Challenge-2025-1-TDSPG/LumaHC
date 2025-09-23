/**
 * Dados de um membro da equipe
 * Usado para exibir informações da equipe na página de integrantes
 */
export type Member = {
  /** Nome completo do membro */
  name: string;
  /** Registro de matrícula */
  rm: string;
  /** Caminho para foto do membro */
  img: string;
  /** Turma/classe do membro */
  class: string;
  /** Breve descrição sobre o membro */
  description: string;
  /** URL do perfil no LinkedIn (opcional) */
  linkedin?: string;
  /** URL do perfil no GitHub (opcional) */
  github?: string;
};
