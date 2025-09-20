import type { Modo, UseTabsProps, UseTabsReturn } from '@/types/tabs';
import type { KeyboardEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

/**
 * Fornece estado, refs, navegação por teclado e utilitários para tabs.
 *
 * @param {UseTabsProps} props - Propriedades opcionais para configuração do hook.
 *   - defaultMode: modo/tab inicial selecionado ('app' ou 'nav').
 *   - idBase: base para geração dos ids de acessibilidade.
 * @returns {UseTabsReturn} - Estado e handlers para tabs acessíveis:
 *   - setActiveTab: função para trocar a tab ativa
 *   - listRef: ref para o container da lista de tabs
 *   - tabId: função utilitária para gerar id da tab
 *   - panelId: função utilitária para gerar id do painel
 *   - isActive: função para verificar se a tab está ativa
 *   - onKeyDown: handler para navegação por teclado
 */
export function useTabs({
  defaultMode = 'app',
  idBase = 'modo',
}: UseTabsProps = {}): UseTabsReturn {
  // Estado da tab ativa
  const [activeTab, setActiveTab] = useState<Modo>(defaultMode);

  // Efeito para detectar mobile/desktop e ajustar o modo automaticamente
  useEffect(() => {
    // Detecta se é mobile (pode ser ajustado conforme necessidade)
    const isMobile = () => window.innerWidth <= 991;
    setActiveTab(isMobile() ? 'app' : 'nav');
  }, []);
  // Ref para o container da lista de tabs (usado para navegação por teclado)
  const listRef = useRef<HTMLDivElement>(null);

  // Gera o id do botão da tab para acessibilidade
  const tabId = (mode: Modo) => `${idBase}-tab-${mode}`;
  // Gera o id do painel da tab para acessibilidade
  const panelId = (mode: Modo) => `${idBase}-panel-${mode}`;
  // Retorna se a tab está ativa
  const isActive = (mode: Modo) => activeTab === mode;

  // Handler para navegação por teclado entre tabs (setas, Home, End)
  // Mantém acessibilidade e usabilidade
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const el = listRef.current;
    if (!el) return;
    const tabs = Array.from(el.querySelectorAll<HTMLElement>('[role="tab"]'));
    const current = document.activeElement as HTMLElement | null;
    const idx = tabs.findIndex((t) => t === current);
    if (idx === -1) return;

    // Função auxiliar para ativar e focar a tab pelo índice
    const go = (i: number) => {
      const btn = tabs[i];

      // Determina o modo/tab pelo id do botão
      if (btn?.id.endsWith('-app')) {
        setActiveTab('app');
      } else {
        setActiveTab('nav');
      }
      btn?.focus();
    };

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      go((idx + 1) % tabs.length);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      go((idx - 1 + tabs.length) % tabs.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      go(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      go(tabs.length - 1);
    }
  };

  // Retorno do hook
  return {
    setActiveTab,
    listRef,
    tabId,
    panelId,
    isActive,
    onKeyDown,
  };
}
