/**
 * Componente Toast reutilizável para exibir notificações rápidas.
 *
 * Este componente é usado em todo o sistema para fornecer feedback visual
 * imediato ao usuário sobre ações realizadas (sucesso, erro, etc.).
 *
 * Características:
 * - Posicionamento fixo no topo da tela
 * - Auto-dismiss após 3 segundos (controlado externamente)
 * - Cores diferentes baseadas no tipo (verde para sucesso, vermelho para erro)
 * - Acessibilidade com role="alert" e aria-live="assertive"
 * - Design responsivo e moderno
 *
 * @param {ToastProps} props - Propriedades do componente
 * @param {string} props.message - Mensagem a ser exibida no toast
 * @param {'success' | 'error'} [props.type='success'] - Tipo do toast
 * @param {boolean} props.show - Se o toast deve ser exibido
 * @returns {React.JSX.Element | null} Elemento JSX do toast ou null se não deve mostrar
 *
 * @example
 * ```tsx
 * // Exemplo de uso básico
 * <Toast
 *   message="Lembrete salvo com sucesso!"
 *   type="success"
 *   show={true}
 * />
 *
 * // Toast de erro
 * <Toast
 *   message="Erro ao salvar lembrete"
 *   type="error"
 *   show={showError}
 * />
 *
 * // Com estado controlado
 * const [toast, setToast] = useState(null);
 *
 * <Toast
 *   message={toast?.message || ''}
 *   type={toast?.type}
 *   show={!!toast}
 * />
 * ```
 */

import type { ToastProps } from '../../types/toast';

export default function Toast({ message, type = 'success', show }: ToastProps) {
  // Se não deve mostrar, retorna null (não renderiza nada)
  if (!show) return null;

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg text-white font-bold text-lg transition-all
        ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
      role='alert'
      aria-live='assertive'
    >
      {message}
    </div>
  );
}
