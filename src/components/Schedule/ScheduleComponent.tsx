/**
 * Componente principal do Medical Schedule (Agenda de Consultas).
 * Permite ao usuário visualizar o calendário, adicionar, editar e remover lembretes de consultas médicas.
 *
 * Utiliza os subcomponentes CalendarGrid, ReminderModal e ReminderList.
 *
 * @module Schedule
 */
import { useSchedule } from '@/hooks/useSchedule';
import { formatDate, getDaysMatrix, getMonthName } from '../../utils/calendarUtils';
import CalendarGrid from './CalendarGrid';
import ReminderModal from './ReminderModal';

/**
 * Componente Schedule
 */

export default function ScheduleComponent() {
  // Hook customizado para gerenciar toda a lógica do schedule
  const {
    today,
    currentMonth,
    currentYear,
    selectedDate,
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
  } = useSchedule();

  return (
    <main className='min-h-screen flex flex-col items-center justify-center py-8'>
      {/* Bloco centralizado do schedule */}
      <section className='p-6 rounded-[10px] max-w-full w-full sm:w-[420px] shadow-[0_2px_6px_rgba(255,112,67,0.15)] box-border relative'>
        {/* Título */}
        <h1 className='text-fontPrimary text-2xl mb-4 text-center font-bold'>Medical Schedule</h1>
        {/* Navegação do mês */}
        <div className='flex items-center justify-between mb-2'>
          <button
            className='px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 focus:outline-none'
            onClick={prevMonth}
            aria-label='Previous month'
          >
            &#8592;
          </button>
          <span className='font-semibold text-lg'>
            {getMonthName(currentMonth)} {currentYear}
          </span>
          <button
            className='px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 focus:outline-none'
            onClick={nextMonth}
            aria-label='Next month'
          >
            &#8594;
          </button>
        </div>
        {/* Grade do calendário */}
        <CalendarGrid
          currentMonth={currentMonth}
          currentYear={currentYear}
          today={today}
          reminders={remindersForCalendar}
          onDayClick={handleDayClick}
          getMonthName={getMonthName}
          getDaysMatrix={getDaysMatrix}
          formatDate={(day) => formatDate(day, currentMonth, currentYear)}
        />
        {/* Modal de lembretes */}
        <ReminderModal
          show={showModal}
          onClose={() => setShowModal(false)}
          selectedDate={selectedDate}
          editingReminder={editingReminder}
          remindersOfDay={remindersOfDay}
          formTime={formTime}
          setFormTime={setFormTime}
          formDescription={formDescription}
          setFormDescription={setFormDescription}
          onSave={handleSaveReminder}
          onEdit={handleEditReminder}
          onRemove={handleRemoveReminder}
        />
        {/* Lista de lembretes do dia (fora do modal, para acessibilidade) */}
        {selectedDate && remindersOfDay.length > 0 && (
          <div className='mt-4'>
            <h3 className='text-sm font-semibold mb-1'>Reminders of the day:</h3>
            <ul className='space-y-1'>
              {remindersOfDay.map((r, idx) => (
                <li
                  key={idx}
                  className='flex items-center justify-between bg-gray-50 rounded px-2 py-1'
                >
                  <div>
                    <span className='font-medium text-sm'>{r.time}</span> -{' '}
                    <span className='text-xs'>{r.description}</span>
                  </div>
                  <div className='flex gap-1'>
                    <button
                      className='text-blue-500 hover:underline text-xs focus:outline-none'
                      onClick={() => handleEditReminder(r)}
                      aria-label='Edit reminder'
                    >
                      Edit
                    </button>
                    <button
                      className='text-red-500 hover:underline text-xs focus:outline-none'
                      onClick={() => handleRemoveReminder(r)}
                      aria-label='Remove reminder'
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
