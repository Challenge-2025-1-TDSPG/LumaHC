/**
 * Utilitários para manipulação de calendário e datas.
 *
 * Este módulo fornece funções auxiliares para trabalhar com datas,
 * geração de calendários e formatação no sistema de agendamento médico.
 * Todas as funções são puras e reutilizáveis.
 */

/**
 * Retorna o nome do mês em português a partir do índice.
 *
 * Converte o índice numérico do mês (como retornado por Date.getMonth())
 * para o nome correspondente em português brasileiro.
 *
 * @param {number} month - Índice do mês (0 para Janeiro, 11 para Dezembro)
 * @returns {string} Nome do mês em português
 *
 * @example
 * ```typescript
 * getMonthName(0);  // "Janeiro"
 * getMonthName(11); // "Dezembro"
 *
 * const hoje = new Date();
 * const nomeDoMes = getMonthName(hoje.getMonth());
 * ```
 *
 * @throws {Error} Se o índice do mês estiver fora do range 0-11
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

/**
 * Gera uma matriz representando as semanas do mês para exibição em calendário.
 *
 * Cria uma estrutura de dados bidimensional onde cada sub-array representa uma semana,
 * e cada elemento é o número do dia ou null para espaços vazios (dias de outros meses).
 * A matriz sempre começa no domingo (índice 0) e termina no sábado (índice 6).
 *
 * @param {number} month - Índice do mês (0-11)
 * @param {number} year - Ano completo (ex: 2025)
 * @returns {(number | null)[][]} Matriz de semanas, cada semana é um array de números (dias) ou null
 *
 * @example
 * ```typescript
 * // Para Janeiro de 2025
 * const matriz = getDaysMatrix(0, 2025);
 * // Retorna algo como:
 * // [
 * //   [null, null, null, 1, 2, 3, 4],     // Primeira semana
 * //   [5, 6, 7, 8, 9, 10, 11],            // Segunda semana
 * //   [12, 13, 14, 15, 16, 17, 18],       // Terceira semana
 * //   [19, 20, 21, 22, 23, 24, 25],       // Quarta semana
 * //   [26, 27, 28, 29, 30, 31, null]      // Quinta semana
 * // ]
 *
 * // Usar para renderizar calendário
 * matriz.forEach(semana => {
 *   semana.forEach(dia => {
 *     if (dia) {
 *       console.log(`Dia ${dia}`);
 *     } else {
 *       console.log('Espaço vazio');
 *     }
 *   });
 * });
 * ```
 */
export function getDaysMatrix(month: number, year: number): (number | null)[][] {
  // Primeiro e último dia do mês
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDayOfWeek = firstDay.getDay(); // 0 = domingo, 6 = sábado

  const matrix: (number | null)[][] = [];
  let week: (number | null)[] = [];
  let dayCounter = 1;

  // Primeira semana: preenche espaços vazios antes do primeiro dia
  for (let i = 0; i < 7; i++) {
    if (i < startDayOfWeek) {
      week.push(null); // Espaços vazios antes do primeiro dia
    } else {
      week.push(dayCounter++);
    }
  }
  matrix.push(week);

  // Demais semanas: preenche os dias restantes
  while (dayCounter <= daysInMonth) {
    week = [];
    for (let i = 0; i < 7; i++) {
      if (dayCounter > daysInMonth) {
        week.push(null); // Espaços vazios após o último dia
      } else {
        week.push(dayCounter++);
      }
    }
    matrix.push(week);
  }

  return matrix;
}

/**
 * Formata uma data no padrão ISO (yyyy-mm-dd) a partir de componentes separados.
 *
 * Converte dia, mês e ano em uma string formatada no padrão ISO 8601,
 * que é o formato padrão para datas em APIs e armazenamento.
 * Garante que mês e dia sempre tenham 2 dígitos com zero à esquerda quando necessário.
 *
 * @param {number} day - Dia do mês (1-31)
 * @param {number} month - Índice do mês (0-11, onde 0 = Janeiro)
 * @param {number} year - Ano completo (ex: 2025)
 * @returns {string} Data formatada como string no padrão yyyy-mm-dd
 *
 * @example
 * ```typescript
 * formatDate(5, 0, 2025);   // "2025-01-05" (5 de Janeiro)
 * formatDate(15, 11, 2025); // "2025-12-15" (15 de Dezembro)
 * formatDate(1, 5, 2025);   // "2025-06-01" (1 de Junho)
 *
 * // Usar com Date para criar string formatada
 * const hoje = new Date();
 * const dataFormatada = formatDate(
 *   hoje.getDate(),
 *   hoje.getMonth(),
 *   hoje.getFullYear()
 * );
 *
 * // Usar para chaves de lembretes
 * const lembrete = {
 *   date: formatDate(15, 2, 2025), // "2025-03-15"
 *   time: "14:30",
 *   description: "Consulta médica"
 * };
 * ```
 */
export function formatDate(day: number, month: number, year: number): string {
  // Converte mês de índice 0-11 para 1-12 e adiciona zero à esquerda se necessário
  const m = String(month + 1).padStart(2, '0');
  // Adiciona zero à esquerda no dia se necessário
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
}
