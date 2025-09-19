/**
 * Componente CalendarGrid
 * Exibe a grade do calendário mensal e lida com a navegação e seleção de dias.
 */

import type { CalendarGridProps } from '@/types/schedule';

export default function CalendarGrid({
  currentMonth,
  currentYear,
  today,
  reminders,
  onDayClick,
  getMonthName,
  getDaysMatrix,
  formatDate,
}: CalendarGridProps) {
  const daysMatrix = getDaysMatrix(currentMonth, currentYear);
  return (
    <>
      {/* Month navigation */}
      <div className='flex items-center justify-between mb-2'>
        <span className='font-semibold text-lg'>
          {getMonthName(currentMonth)} {currentYear}
        </span>
      </div>
      {/* Cabeçalho dos dias da semana */}
      <div className='grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-1'>
        <div>Dom</div>
        <div>Seg</div>
        <div>Ter</div>
        <div>Qua</div>
        <div>Qui</div>
        <div>Sex</div>
        <div>Sáb</div>
      </div>
      {/* Dias do mês */}
      <div className='grid grid-cols-7 gap-1'>
        {daysMatrix.map((week, i) =>
          week.map((day, j) => {
            const dateStr = day ? formatDate(day) : '';
            const hasReminder = reminders.some((r) => r.date === dateStr);
            return (
              <div
                key={`d${i}-${j}`}
                className={`h-10 flex items-center justify-center rounded cursor-pointer select-none transition
                  ${day ? 'bg-gray-50 hover:bg-blue-100 focus:bg-blue-200' : ''}
                  ${day && today.getDate() === day && today.getMonth() === currentMonth && today.getFullYear() === currentYear ? 'border-2 border-blue-500' : ''}
                  ${hasReminder ? 'ring-2 ring-green-400' : ''}
                `}
                onClick={() => onDayClick(day)}
                aria-label={day ? `Selecionar dia ${day}` : ''}
                tabIndex={day ? 0 : -1}
                onKeyDown={(e) => {
                  if (day && (e.key === 'Enter' || e.key === ' ')) onDayClick(day);
                }}
                role='button'
              >
                <span>{day || ''}</span>
                {hasReminder && (
                  <span className='ml-1 w-2 h-2 bg-green-400 rounded-full inline-block' />
                )}
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
