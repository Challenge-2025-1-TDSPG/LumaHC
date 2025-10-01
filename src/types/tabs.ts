/**
 * Tipos e interfaces para controle de tabs acessíveis.
 */

import type { ReactNode, KeyboardEvent, RefObject } from 'react';

/**
 * Tipo que representa os modos/tabs disponíveis.
 * 'app' para aplicativo, 'nav' para navegador.
 */
export type Modo = 'app' | 'nav';

/**
 * Propriedades aceitas pelo hook useTabs.
 * @property defaultMode - modo/tab inicial selecionado ('app' ou 'nav').
 * @property idBase - base para geração dos ids de acessibilidade.
 */
export interface UseTabsProps {
  defaultMode?: Modo;
  idBase?: string;
}

/**
 * Tipagem explícita do objeto retornado pelo hook useTabs.
 */
export interface UseTabsReturn {
  setActiveTab: (m: Modo) => void;
  listRef: RefObject<HTMLDivElement | null>;
  tabId: (mode: Modo) => string;
  panelId: (mode: Modo) => string;
  isActive: (mode: Modo) => boolean;
  onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
}

/**
 * Props para componentes de tabs
 */
export interface ChooseModeTabsProps {
  app: ReactNode;
  nav: ReactNode;
  labelApp?: string;
  labelNav?: string;
  defaultMode?: 'app' | 'nav';
  idBase?: string;
  className?: string;
  unmountInactive?: boolean;
  onChangeMode?: (mode: 'app' | 'nav') => void;
}
