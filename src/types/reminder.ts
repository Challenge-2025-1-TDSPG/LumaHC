/**
 * Tipos e interfaces para o sistema de lembretes da Agenda Médica.
 *
 * Este arquivo centraliza todas as definições de tipos relacionadas aos lembretes,
 * garantindo consistência de tipagem em todo o sistema de agendamento.
 */

/**
 * Tipo para ação de lembrete, usado para disparar notificações toast.
 *
 * @typedef {'add' | 'edit' | 'remove'} ReminderAction
 */
export type ReminderAction = 'add' | 'edit' | 'remove';

/**
 * Tipo para função handler de lembrete.
 * Define a assinatura das funções que manipulam lembretes.
 *
 * @typedef {(reminder: Reminder) => void} ReminderHandlerFn
 * @param reminder - Objeto lembrete a ser processado
 */
export type ReminderHandlerFn = (reminder: Reminder) => void;

/**
 * Interface principal para objetos de lembrete.
 *
 * Representa um lembrete médico com data, horário e descrição.
 * Usado em todo o sistema de agendamento para manter consistência.
 *
 * @interface Reminder
 * @property {string} date - Data no formato ISO yyyy-mm-dd (ex: "2025-01-15")
 * @property {string} time - Horário no formato HH:mm (ex: "14:30")
 * @property {string} description - Descrição do lembrete (ex: "Consulta com Dr. Silva")
 *
 * @example
 * ```typescript
 * const lembrete: Reminder = {
 *   date: "2025-01-15",
 *   time: "14:30",
 *   description: "Consulta cardiologia"
 * };
 * ```
 */
export type Reminder = {
  date: string; // formato ISO yyyy-mm-dd
  time: string; // formato HH:mm
  description: string;
};
