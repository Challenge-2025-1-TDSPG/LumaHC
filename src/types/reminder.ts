/**
 * Tipo para ação de lembrete (toast)
 */
export type ReminderAction = 'add' | 'edit' | 'remove';
/**
 * Tipo para função handler de lembrete
 */
export type ReminderHandlerFn = (reminder: Reminder) => void;
/**
 * Tipos globais para lembretes da Agenda
 */
export type Reminder = {
  date: string; // formato ISO yyyy-mm-dd
  time: string; // formato HH:mm
  description: string;
};
