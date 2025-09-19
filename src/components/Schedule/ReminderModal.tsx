/**
 * Componente ReminderModal
 * Modal para adicionar ou editar lembretes de consulta médica.
 */
import type { ReminderModalProps } from '@/types/schedule';
import ReminderList from './ReminderList';

export default function ReminderModal(props: ReminderModalProps) {
  const {
    show,
    onClose,
    selectedDate,
    editingReminder,
    remindersOfDay,
    formTime,
    setFormTime,
    formDescription,
    setFormDescription,
    onSave,
    onEdit,
    onRemove,
  } = props;
  if (!show) return null;
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40'>
      <div
        className='bg-white rounded-lg p-6 w-full max-w-xs shadow-lg relative'
        role='dialog'
        aria-modal='true'
        aria-labelledby='schedule-modal-title'
      >
        <button
          className='absolute top-2 right-2 text-gray-400 hover:text-gray-700'
          onClick={onClose}
          aria-label='Fechar modal'
        >
          &times;
        </button>
        <h3 id='schedule-modal-title' className='text-lg font-semibold mb-2 text-center'>
          {editingReminder ? 'Editar lembrete' : 'Novo lembrete'}
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!selectedDate) return;
            onSave({
              date: selectedDate,
              time: formTime,
              description: formDescription,
            });
          }}
          className='flex flex-col gap-2'
        >
          <label className='text-sm' htmlFor='schedule-time'>
            Horário
          </label>
          <input
            id='schedule-time'
            type='time'
            className='border rounded px-2 py-1'
            value={formTime}
            onChange={(e) => setFormTime(e.target.value)}
            required
          />
          <label className='text-sm' htmlFor='schedule-desc'>
            Descrição
          </label>
          <input
            id='schedule-desc'
            type='text'
            className='border rounded px-2 py-1'
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
            placeholder='Ex: Consulta com Dr. João'
            required
            maxLength={60}
          />
          <button
            type='submit'
            className='mt-2 bg-blue-600 text-white rounded px-3 py-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
          >
            {editingReminder ? 'Atualizar' : 'Adicionar'}
          </button>
        </form>
        <ReminderList reminders={remindersOfDay} onEdit={onEdit} onRemove={onRemove} />
      </div>
    </div>
  );
}
