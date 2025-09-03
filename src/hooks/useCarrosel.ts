import { useEffect, useRef } from 'react';
import { usePassos } from '@/hooks/usePassos';
import type { CarouselOptions } from '@/types/navigation';

/**
 * Hook para gerenciar carrosseis com autoplay e navegação
 * 
 * @param total - Número total de itens no carrossel
 * @param options - Opções de configuração (autoplay, loop)
 * @returns Objeto com estado e funções de controle do carrossel
 * 
 * @example
 * const { indice, proximo, anterior } = useCarrossel(5, { autoMs: 3000 });
 */
export function useCarrossel(total: number, { autoMs = 0, loop = true }: CarouselOptions = {}) {
  const { indice, irPara } = usePassos(total, 0);

  // Refs para evitar recriar funções no efeito
  const timerRef = useRef<number | null>(null);
  const idxRef = useRef(indice);
  
  useEffect(() => {
    idxRef.current = indice;
  }, [indice]);

  useEffect(() => {
    // Sempre limpa qualquer timer antigo
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    // Não cria timer se autoMs <= 0 ou total <= 1
    if (!autoMs || autoMs <= 0 || total <= 1) return;

    timerRef.current = window.setInterval(() => {
      const i = idxRef.current;
      const next = loop ? (i + 1) % total : Math.min(i + 1, total - 1);
      irPara(next);
    }, autoMs);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [autoMs, total, loop, irPara]);

  const proximo = () => irPara(loop ? (indice + 1) % total : Math.min(indice + 1, total - 1));
  const anterior = () => irPara(loop ? (indice - 1 + total) % total : Math.max(indice - 1, 0));

  return { indice, proximo, anterior, irPara, total };
}
