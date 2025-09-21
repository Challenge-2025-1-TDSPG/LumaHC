/**
 * Utilitários para persistência de usuários e sessão no localStorage
 */
import type { CadastroFormData } from '@/types/form';

const USERS_KEY = 'cadastrosLumaHC';
const LOGGED_USER_KEY = 'usuarioLogado';

// Usuários cadastrados
export function getUsersFromStorage(): CadastroFormData[] {
  const data = localStorage.getItem(USERS_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data) as CadastroFormData[];
  } catch {
    return [];
  }
}

export function saveUserToStorage(user: CadastroFormData): void {
  const users = getUsersFromStorage();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function setAllUsersToStorage(users: CadastroFormData[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Sessão do usuário logado
export function setLoggedUser(cpf: string): void {
  localStorage.setItem(LOGGED_USER_KEY, cpf);
}

export function getLoggedUser(): string | null {
  return localStorage.getItem(LOGGED_USER_KEY);
}

export function removeLoggedUser(): void {
  localStorage.removeItem(LOGGED_USER_KEY);
}
