import type { CadastroFormData } from '@/types/form';
import { getLoggedUser, getUsersFromStorage, removeLoggedUser } from '@/utils/userStorage';
import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';

/**
 * Hook customizado para gerenciamento de autenticação
 * Monitora o estado de login do usuário e fornece funções de logout
 */
export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userCpf, setUserCpf] = useState<string | null>(null);
  const [userData, setUserData] = useState<CadastroFormData | null>(null);
  const [forceUpdate, setForceUpdate] = useState<number>(0);
  const navigate = useNavigate();

  // Função para verificar status de autenticação
  const checkAuthStatus = useCallback(() => {
    const loggedUserCpf = getLoggedUser();
    setIsLoggedIn(!!loggedUserCpf);
    setUserCpf(loggedUserCpf);

    // Busca dados completos do usuário se estiver logado
    if (loggedUserCpf) {
      const users = getUsersFromStorage();
      const user = users.find((u) => u.cpf === loggedUserCpf);
      // Força criação de novo objeto para garantir re-render
      setUserData(user ? { ...user } : null);
    } else {
      setUserData(null);
    }
  }, []); // Array vazio - função não depende de props ou estado

  // Verifica o estado de autenticação ao montar o componente
  useEffect(() => {
    checkAuthStatus();

    // Monitora mudanças no localStorage (para casos de logout em outras abas)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'usuarioLogado') {
        checkAuthStatus();
      }
    };

    // Evento customizado para forçar atualização de auth
    const handleAuthUpdate = () => {
      // Executa de forma síncrona para garantir atualização imediata
      flushSync(() => {
        checkAuthStatus();
      });
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('auth-update', handleAuthUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('auth-update', handleAuthUpdate);
    };
  }, [checkAuthStatus]);

  // Re-executa verificação quando forceUpdate muda (para logout na mesma aba)
  useEffect(() => {
    if (forceUpdate > 0) {
      checkAuthStatus();
    }
  }, [forceUpdate, checkAuthStatus]);

  /**
   * Realiza logout do usuário
   * Remove dados do localStorage e força re-renderização usando React
   */
  const logout = () => {
    try {
      // Remove apenas o usuário logado (mantém lembretes salvos)
      removeLoggedUser();
      // Nota: clearAllReminders() removido - lembretes devem ser mantidos

      // Força atualizações síncronas usando flushSync
      flushSync(() => {
        setIsLoggedIn(false);
        setUserCpf(null);
        setUserData(null);
        setForceUpdate((prev) => prev + 1);
      });

      // Dispara evento customizado para garantir que todos os componentes sejam atualizados
      window.dispatchEvent(new CustomEvent('auth-update'));

      // Navegação suave com React Router
      navigate('/', {
        replace: true,
        state: { message: 'Logout realizado com sucesso.' },
      });
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      // Força estados mesmo com erro usando flushSync
      flushSync(() => {
        setIsLoggedIn(false);
        setUserCpf(null);
        setUserData(null);
        setForceUpdate((prev) => prev + 1);
      });
      // Dispara evento mesmo com erro
      window.dispatchEvent(new CustomEvent('auth-update'));
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
