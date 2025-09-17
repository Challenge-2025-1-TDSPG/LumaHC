import type { KeyboardEvent } from 'react';
import { useRef, useState } from 'react';

export type Modo = 'app' | 'nav';

export interface UseTabsProps {
  defaultMode?: Modo;
  idBase?: string;
}

export function useTabs({ defaultMode = 'app', idBase = 'modo' }: UseTabsProps = {}) {
  const [mode, setMode] = useState<Modo>(defaultMode);
  const listRef = useRef<HTMLDivElement | null>(null);

  const tabId = (m: Modo) => `${idBase}-tab-${m}`;
  const panelId = (m: Modo) => `${idBase}-panel-${m}`;
  const isActive = (m: Modo) => mode === m;

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const el = listRef.current;
    if (!el) return;
    const tabs = Array.from(el.querySelectorAll<HTMLElement>('[role="tab"]'));
    const current = document.activeElement as HTMLElement | null;
    const idx = tabs.findIndex((t) => t === current);
    if (idx === -1) return;

    const go = (i: number) => {
      const btn = tabs[i];
      const nextIsApp = btn?.id.endsWith('-app');
      setMode(nextIsApp ? 'app' : 'nav');
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

  return {
    mode,
    setMode,
    listRef,
    tabId,
    panelId,
    isActive,
    onKeyDown,
  };
}
