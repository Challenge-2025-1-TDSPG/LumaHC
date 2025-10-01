import type { CadastroFormData } from '@/types/form';
import { clearAllReminders } from '@/utils/reminderStorage';
import { getLoggedUser, getUsersFromStorage, removeLoggedUser } from '@/utils/userStorage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Hook customizado para gerenciamento de autenticação
 * Monitora o estado de login do usuário e fornece funções de logout
 */
export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userCpf, setUserCpf] = useState<string | null>(null);
  const [userData, setUserData] = useState<CadastroFormData | null>(null);
  const navigate = useNavigate();

  // Verifica o estado de autenticação ao montar o componente
  useEffect(() => {
    const checkAuthStatus = () => {
      const loggedUserCpf = getLoggedUser();
      setIsLoggedIn(!!loggedUserCpf);
      setUserCpf(loggedUserCpf);

      // Busca dados completos do usuário se estiver logado
      if (loggedUserCpf) {
        const users = getUsersFromStorage();
        const user = users.find((u) => u.cpf === loggedUserCpf);
        setUserData(user || null);
      } else {
        setUserData(null);
      }
    };

    checkAuthStatus();

    // Monitora mudanças no localStorage (para casos de logout em outras abas)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'usuarioLogado') {
        checkAuthStatus();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  /**
   * Realiza logout do usuário
   * Remove dados do localStorage e redireciona para home
   */
  const logout = () => {
    try {
      removeLoggedUser();
      clearAllReminders(); // Limpa todos os lembretes/agendamentos
      setIsLoggedIn(false);
      setUserCpf(null);
      setUserData(null);
      // Navegação com replace para limpar histórico
      navigate('/', {
        replace: true,
        state: { message: 'Logout realizado com sucesso.' },
      });
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      // Navegação de fallback mesmo com erro
      navigate('/', { replace: true });
    }
  };

  return {
    isLoggedIn,
    userCpf,
    userData,
    logout,
  };
}
