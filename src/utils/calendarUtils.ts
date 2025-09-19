/**
 * Funções utilitárias para manipulação de datas e calendário do Schedule.
 * Comentários em português, nomes em inglês.
 */
export function getMonthName(month: number): string {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return months[month];
}

export function getDaysMatrix(month: number, year: number): (number | null)[][] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDayOfWeek = firstDay.getDay();
  const matrix: (number | null)[][] = [];
  let week: (number | null)[] = [];
  let dayCounter = 1;
  for (let i = 0; i < 7; i++) {
    if (i < startDayOfWeek) week.push(null);
    else week.push(dayCounter++);
  }
  matrix.push(week);
  while (dayCounter <= daysInMonth) {
    week = [];
    for (let i = 0; i < 7; i++) {
      if (dayCounter > daysInMonth) week.push(null);
      else week.push(dayCounter++);
    }
    matrix.push(week);
  }
  return matrix;
}

export function formatDate(day: number, month: number, year: number): string {
  const m = String(month + 1).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
}
