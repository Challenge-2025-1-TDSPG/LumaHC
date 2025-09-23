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
    <div className='w-full flex flex-col items-center'>
      {/* Month navigation */}
      <div className='w-full bg-gray-100/80 rounded-3xl border border-orange-200 p-4 sm:p-8 flex flex-col items-center transition-all shadow-none'>
        {/* Mês destacado dentro do calendário */}
        <div className='w-full flex justify-center mb-6'>
          <span className='text-2xl font-bold text-orange-700 tracking-wide'>
            {getMonthName(currentMonth)}
          </span>
        </div>
        {/* Cabeçalho dos dias da semana */}
        <div className='grid grid-cols-7 gap-4 text-center text-lg font-bold text-orange-700 mb-3 w-full'>
          <div>Dom</div>
          <div>Seg</div>
          <div>Ter</div>
          <div>Qua</div>
          <div>Qui</div>
          <div>Sex</div>
          <div>Sáb</div>
        </div>
        {/* Dias do mês */}
        <div className='grid grid-cols-7 gap-4 w-full'>
          {daysMatrix.map((week, i) =>
            week.map((day, j) => {
              const dateStr = day ? formatDate(day) : '';
              const hasReminder = reminders.some((r) => r.date === dateStr);
              const isToday =
                day &&
                today.getDate() === day &&
                today.getMonth() === currentMonth &&
                today.getFullYear() === currentYear;
              // Verifica se o dia já passou
              const isPast =
                day &&
                new Date(currentYear, currentMonth, day) <
                  new Date(today.getFullYear(), today.getMonth(), today.getDate());
              return (
                <div
                  key={`d${i}-${j}`}
                  className={`h-20 sm:h-24 w-full min-w-[56px] sm:min-w-[72px] max-w-full flex items-center justify-center rounded-xl select-none transition-all
                    ${day ? (isPast ? 'bg-gray-200 text-gray-400 border border-gray-200 cursor-not-allowed' : 'bg-white shadow-md hover:bg-orange-100 focus:bg-orange-200 border border-orange-200 cursor-pointer') : 'bg-transparent'}
                    ${isToday && !isPast ? 'border-2 border-orange-600' : ''}
                    ${hasReminder && !isPast ? 'ring-2 ring-green-400' : ''}
                    ${!day ? 'pointer-events-none' : ''}
                  `}
                  onClick={() => !isPast && day && onDayClick(day)}
                  aria-label={day ? `Selecionar dia ${day}` : ''}
                  tabIndex={day && !isPast ? 0 : -1}
                  onKeyDown={(e) => {
                    if (day && !isPast && (e.key === 'Enter' || e.key === ' ')) onDayClick(day);
                  }}
                  role='button'
                >
                  <span
                    className={`text-xl font-bold ${isPast ? 'text-gray-400' : 'text-orange-700'}`}
                  >
                    {day || ''}
                  </span>
                  {hasReminder && !isPast && (
                    <span className='ml-1 w-4 h-4 bg-green-400 rounded-full inline-block border-2 border-white shadow' />
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
