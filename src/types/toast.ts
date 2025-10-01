/**
 * Tipos e interfaces para o sistema de notificações Toast.
 *
 * Este arquivo centraliza as definições de tipos para o componente Toast,
 * usado para exibir feedback visual ao usuário em ações de lembrete.
 */

/**
 * Tipo para função de exibir toast.
 * Define a assinatura da função que cria notificações toast.
 *
 * @typedef {(message: string, type?: 'success' | 'error') => void} ShowToastFn
 * @param message - Mensagem a ser exibida na notificação
 * @param type - Tipo da notificação (padrão: 'success')
 *
 * @example
 * ```typescript
 * const showToast: ShowToastFn = (message, type = 'success') => {
 *   // lógica de exibição
 * };
 *
 * showToast('Lembrete salvo!', 'success');
 * showToast('Erro ao salvar', 'error');
 * ```
 */
export type ShowToastFn = (message: string, type?: 'success' | 'error') => void;

/**
 * Interface para propriedades do componente Toast.
 *
 * Define todas as props necessárias para renderizar uma notificação toast.
 *
 * @interface ToastProps
 * @property {string} message - Mensagem a ser exibida
 * @property {'success' | 'error'} [type] - Tipo da notificação (opcional, padrão: 'success')
 * @property {boolean} show - Se a notificação deve ser visível
 *
 * @example
 * ```tsx
 * <Toast
 *   message="Operação realizada com sucesso!"
 *   type="success"
 *   show={true}
 * />
 * ```
 */
export interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  show: boolean;
}

/**
 * Estado do toast para uso em hooks de notificação.
 *
 * Representa o estado atual de uma notificação toast,
 * podendo ser null quando não há notificação ativa.
 *
 * @typedef {Object | null} ToastState
 * @property {string} message - Mensagem da notificação
 * @property {'success' | 'error'} type - Tipo da notificação
 *
 * @example
 * ```typescript
 * const [toast, setToast] = useState<ToastState>(null);
 *
 * // Ativar toast
 * setToast({ message: 'Sucesso!', type: 'success' });
 *
 * // Desativar toast
 * setToast(null);
 * ```
 */
export type ToastState = { message: string; type: 'success' | 'error' } | null;
