/**
 * Lista de lembretes do dia.
 */
import type { ReminderListProps } from '@/types/schedule';

export default function ReminderList({ reminders, onEdit, onRemove }: ReminderListProps) {
  if (!reminders.length) return null;
  return (
    <div className='mt-6 mb-4 w-full px-0'>
      <div className='text-2xl font-semibold mb-3'>Lembretes do dia:</div>
      <ul className='space-y-3 border border-orange-200 rounded-2xl bg-gray-50 max-w-2xl mx-auto py-3'>
        {reminders.map((r, idx) => (
          <li
            key={idx}
            className='flex items-center justify-between bg-gray-50 rounded px-6 py-4 min-h-[56px] text-lg'
          >
            <div>
              <span className='font-medium text-lg'>{r.time}</span> -{' '}
              <span className='text-lg'>{r.description}</span>
            </div>
            <div className='flex gap-4'>
              <button
                className='text-blue-500 hover:underline text-lg focus:outline-none'
                onClick={() => onEdit(r)}
                aria-label='Editar lembrete'
              >
                Editar
              </button>
              <button
                className='text-red-500 hover:underline text-lg focus:outline-none'
                onClick={() => onRemove(r)}
                aria-label='Remover lembrete'
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
