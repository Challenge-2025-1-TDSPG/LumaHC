/**
 * Props do componente ReminderList.
 */
export type ReminderListProps = {
  reminders: Reminder[];
  onEdit: (reminder: Reminder) => void;
  onRemove: (reminder: Reminder) => void;
};
/**
 * Props do componente ReminderModal.
 */
import type { Reminder } from '@/types/reminder';
export type ReminderModalProps = {
  show: boolean;
  onClose: () => void;
  selectedDate: string | null;
  editingReminder: Reminder | null;
  remindersOfDay: Reminder[];
  formTime: string;
  setFormTime: (v: string) => void;
  formDescription: string;
  setFormDescription: (v: string) => void;
  onSave: (reminder: Reminder) => void;
  onEdit: (reminder: Reminder) => void;
  onRemove: (reminder: Reminder) => void;
};
/**
 * Tipos compartilhados do módulo Schedule/Calendar.
 * Comentários em português para documentação.
 */

export type CalendarReminder = { date: string };

/**
 * Props do componente CalendarGrid.
 */
export type CalendarGridProps = {
  currentMonth: number;
  currentYear: number;
  today: Date;
  reminders: CalendarReminder[];
  onDayClick: (day: number | null) => void;
  getMonthName: (month: number) => string;
  getDaysMatrix: (month: number, year: number) => (number | null)[][];
  formatDate: (day: number) => string;
};
