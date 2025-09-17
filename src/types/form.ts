// Tipos do formulário de atendimento
export type FormData = {
  nome: string;
  cpf: string;
  dataNascimento: string;
  email?: string;
  telefone: string;
};

// Estado de validação dos campos
export type FormValidation = {
  nome: boolean;
  cpf: boolean;
  dataNascimento: boolean;
  email: boolean;
  telefone: boolean;
};
