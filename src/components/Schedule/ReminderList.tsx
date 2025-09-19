/**
 * Lista de lembretes do dia.
 */
import type { ReminderListProps } from '@/types/schedule';

export default function ReminderList({ reminders, onEdit, onRemove }: ReminderListProps) {
  if (!reminders.length) return null;
  return (
    <div className='mt-4'>
      <div className='text-xs font-semibold mb-1'>Lembretes do dia:</div>
      <ul className='space-y-1'>
        {reminders.map((r, idx) => (
          <li key={idx} className='flex items-center justify-between bg-gray-50 rounded px-2 py-1'>
            <div>
              <span className='font-medium text-sm'>{r.time}</span> -{' '}
              <span className='text-xs'>{r.description}</span>
            </div>
            <div className='flex gap-1'>
              <button
                className='text-blue-500 hover:underline text-xs focus:outline-none'
                onClick={() => onEdit(r)}
                aria-label='Editar lembrete'
              >
                Editar
              </button>
              <button
                className='text-red-500 hover:underline text-xs focus:outline-none'
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
