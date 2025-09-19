/**
 * Custom hook to manage the state and logic of the Medical Schedule.
 * Encapsulates all date, reminder, and form handling.
 */
import type { Reminder } from '@/types/reminder';
import { formatDate } from '@/utils/calendarUtils';
import { useState } from 'react';

export function useSchedule() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth());
  const [currentYear, setCurrentYear] = useState<number>(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingReminder, setEditingReminder] = useState<Reminder | null>(null);
  const [formTime, setFormTime] = useState('');
  const [formDescription, setFormDescription] = useState('');

  /** Advances to the next month. */
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  /** Goes back to the previous month. */
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  /** Handles clicking on a calendar day. */
  const handleDayClick = (day: number | null) => {
    if (!day) return;
    const dateStr = formatDate(day, currentMonth, currentYear);
    setSelectedDate(dateStr);
    setEditingReminder(null);
    setFormTime('');
    setFormDescription('');
    setShowModal(true);
  };

  /** Saves a new reminder or updates an existing one. */
  const handleSaveReminder = (reminder: Reminder) => {
    setReminders((prev) => {
      if (editingReminder) {
        return prev.map((r) =>
          r.date === editingReminder.date &&
          r.time === editingReminder.time &&
          r.description === editingReminder.description
            ? reminder
            : r
        );
      }
      return [...prev, reminder];
    });
    setShowModal(false);
    setEditingReminder(null);
    setFormTime('');
    setFormDescription('');
  };

  /** Edits an existing reminder. */
  const handleEditReminder = (reminder: Reminder) => {
    setEditingReminder(reminder);
    setSelectedDate(reminder.date);
    setFormTime(reminder.time);
    setFormDescription(reminder.description);
    setShowModal(true);
  };

  /** Removes a reminder. */
  const handleRemoveReminder = (reminder: Reminder) => {
    setReminders((prev) =>
      prev.filter(
        (r) =>
          !(
            r.date === reminder.date &&
            r.time === reminder.time &&
            r.description === reminder.description
          )
      )
    );
  };

  const remindersOfDay = selectedDate ? reminders.filter((r) => r.date === selectedDate) : [];
  const remindersForCalendar = reminders.map((r) => ({ date: r.date }));

  return {
    today,
    currentMonth,
    currentYear,
    selectedDate,
    reminders,
    showModal,
    editingReminder,
    formTime,
    setFormTime,
    formDescription,
    setFormDescription,
    nextMonth,
    prevMonth,
    handleDayClick,
    handleSaveReminder,
    handleEditReminder,
    handleRemoveReminder,
    setShowModal,
    remindersOfDay,
    remindersForCalendar,
  };
}
